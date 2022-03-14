import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const pulseAnimation = keyframes`
0% {
  box-shadow: 0 0 5px 5px #FFFFFF00;
}
50% {
  box-shadow: 0 0 5px 5px #FFFFFF44;
}
100% {
  box-shadow: 0 0 5px 10px #FFFFFF00;
}
`

const StyledButton = styled.button`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
align-self: ${props => props.align || 'flex-start'};

&:focus {
  outline: none;
}

&:hover {
  animation: ${pulseAnimation} .5s infinite ease-in-out;
}

${props => props.primary && css`
  color: ${props => props.color || props.theme.colors.primary};
  background: ${props => props.background || 'white'};
`}

${props => props.outlined && css `
  color: ${props => props.color || props.theme.colors.primary};
  border: 1px solid ${props => props.color || 'white'};
  background: transparent;
`}
`

/**
 *  Наследование
 */

const LargeButton = styled(StyledButton)`
font-size: 32px;
`

const Button = (props) => {
  return <StyledButton {...props}/>
}

export default Button
