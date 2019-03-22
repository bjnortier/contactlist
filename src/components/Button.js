import styled from 'styled-components'

export default styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  color: ${({ disabled }) => disabled ? '#666' : 'white'};
  background-color: ${({ disabled }) => disabled ? '#b3b3b3' : '#321a61'};
  cursor: ${({ disabled }) => disabled ? 'no-drop' : 'pointer'};
  &:focus {
    outline: none;
    border-color: #5b9dd6;
    box-shadow: 0 0 0px 2px #93cdff;
  }
`
