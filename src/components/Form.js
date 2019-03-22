import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Spinner from './Spinner'
import Panel from './Panel'
import Button from './Button'
import Input from './Input'
import HSpace from './HSpace'

const TR = styled.tr`
  :last-child {
    text-align: right;
  }
`

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
    const spinner = creating === 'in-progress' ? <><HSpace /><Spinner /></> : null
    const buttonDisabled = name === '' || number === ''
    return <Panel>
      <h3>New contact</h3>
      <table><tbody>
        <TR>
          <td><Input
            placeholder='NAME'
            value={name}
            onChange={this.handleNameChange}
          /></td>
        </TR><TR>
          <td><Input
            placeholder='PHONE NUMBER'
            value={number}
            onChange={this.handleNumberChange}
          /></td>
        </TR>
        <TR>
          <td><Button
            disabled={buttonDisabled}
            onClick={this.handleAddClick}
          >
            <><FontAwesomeIcon icon={faPlus} />{spinner}</>
          </Button></td>
        </TR>
      </tbody></table>
    </Panel>
  }
}

Form.propTypes = {
  creating: PropTypes.string.isRequired
}

export default Form
