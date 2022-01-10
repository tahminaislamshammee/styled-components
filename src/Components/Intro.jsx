import styled from "styled-components";

const Box = styled.div`
width: 55vw;
height: 40vh;
display: flex;


position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-repeat: no-repeat;
background-size:  100% 2px;
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;
`

const Intro = () => {
    return ( 
        <Box>Introduction</Box>
     );
}
 
export default Intro;