import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { lightTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? lightTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:5;
`

const LogoComponent = (props) => {
    return (
            <Logo color={props.theme}>
                jalolov_sh__
            </Logo>
    )
}

export default LogoComponent
