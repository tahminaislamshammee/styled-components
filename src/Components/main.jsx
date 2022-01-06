import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";

const MainContainer = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;


    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`;

const Container = styled.div`
    padding: 2rem;
`;


const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;

`
const Blog = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    transform: rotate(90deg)translate(-50%, -50%);
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`

const Work = styled(NavLink)`
    color: ${props => props.click? props.theme.body : props.theme.text};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    left: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`
const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

`

const About = styled(NavLink)`
    color: ${props => props.click? props.theme.body : props.theme.text};
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`

const Skill = styled(NavLink)`
    color: ${props => props.theme.text};
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`

const rotate = keyframes`
    from{
        transform:(0);
    }
    to{
        transform: rotate(360deg);
    }
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click? '85%' : '50%'};
    left: ${props => props.click? '92%' : '50%'};
    transform: translate(-50%, -50%);
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in;

    &>:first-child{
        animation: ${rotate} infinite 1.5s linear;
    }

    &>:last-child{
        padding-top: 1rem;
        display: ${props => props.click? 'none' : 'inline-block'};
    }
`

const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0'};
    height: ${props => props.click ? '100%' : '0'};
    z-index: 1;
    background-color: ${props => props.theme.text};
    transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return ( 
        <MainContainer>
            <DarkDiv click={click}/>
            <Container>
                <PowerButton/>
                <LogoComponent click={click}/>
                <SocialIcons />
                
                <Center click={click}>
                    <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill="currentColor"/>
                    <span>click here</span>
                </Center>
                <Contact target="_blank" to={{pathname: 'mailto:abc@gmail.com'}}>
                    <h3>
                        Say hi...
                    </h3>
                </Contact>

                <Blog to="/blog">
                    <h3>
                        Blog
                    </h3>
                </Blog>

                <Work to="/work" click={click}>
                    <h3>
                        work
                    </h3>
                </Work>

                <BottomBar>
                    <About to="/about" click={click}>
                        <h3>
                            About
                        </h3>
                    </About>

                    <Skill to="/skills">
                        <h3>
                            Skills
                        </h3>
                    </Skill>
                </BottomBar>
            </Container>
        </MainContainer>
     );
}
 
export default Main;