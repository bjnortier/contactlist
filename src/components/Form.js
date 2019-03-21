import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      number: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value })
  }

  handleNumberChange (event) {
    this.setState({ number: event.target.value })
  }

  handleAddClick () {
    const { name, number } = this.state
    this.props.onAddContact(name, number)
    this.setState({
      name: '',
      number: ''
    })
  }

  render () {
    const { creating } = this.props
    const { name, number } = this.state
    const spinner = creating === 'in-progress' ? '...' : null
    return <div>
      <table><tbody>
        <tr>
          <td>Name:</td>
          <td><input
            value={name}
            onChange={this.handleNameChange}
          /></td>
        </tr><tr>
          <td>Number:</td>
          <td><input
            value={number}
            onChange={this.handleNumberChange}
          /></td>
        </tr>
        <tr>
          <td><button onClick={this.handleAddClick}>Add</button></td>
          <td />
        </tr>
      </tbody></table>
      {spinner}
    </div>
  }
}

Form.propTypes = {
  creating: PropTypes.string.isRequired
}

export default Form
