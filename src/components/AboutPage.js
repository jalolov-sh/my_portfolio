import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import walle from '../assets/Images/wall_e.png'

const Box = styled.div`
background-color: ${props => props.theme.text};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
&>*:not(:last-child){
    margin: 0.5rem 0;
}
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(10px) }
100% { transform: translateY(-10px) }
`


const Walle = styled.div`
position: absolute;
top: 20%;
right: 12%;
width: 20vw;
animation: ${float} 2s ease infinite;
img{
    width: 140%;
    height: auto;
}
`


// const float = keyframes`
// 0% { transform: translateY(-10px) }
// 50% { transform: translateY(15px) translateX(15px) }
// 100% { transform: translateY(-10px) }

// `
// const Spaceman = styled.div`
// position: absolute;
// top: 40%;
// right: 5%;
// width: 20vw;
// animation: ${float} 4s ease infinite;
// img{
//     width: 100%;
//     height: auto;
// }
// `
const Main =  styled.div`
border: 1px solid white;
color: white;
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;  
`



const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>


<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />
        <Walle >
            
            <img src={walle}  alt="Wall_e" any="text" />
            
        </Walle>

        <Main>
            
        I'm a front-end developer located in Uzbekistan . I study at the INHA University in Tashkent and love to create simple yet beautiful websites with great user experience.
<br /> <br/>
I am interested in the whole frontend stack because I am trying new things and creating great projects. I am an independent programmer. I love reading books.
<br/> <br/>
I believe that when you put your mind to it, everything is Picture. You can contact me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
