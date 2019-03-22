import styled from 'styled-components'

export default styled.input`
  border-radius: 4px;
  border: solid 1px #ccc;
  padding: 8px;
  width: ${props => props.width - 16}px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  &:focus {
    outline: none;
    border-color: #5b9dd6;
    box-shadow: 0 0 0px 2px #93cdff;
  }
`
