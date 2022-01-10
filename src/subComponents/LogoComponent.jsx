import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DarkTheme } from "../Components/Themes";

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    font-family: 'Pacifico', cursive;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
    text-decoration: none;
    font-size: 30px;
`

const LogoComponent = (props) => {
    return ( 
        <Logo to="/" color={props.theme}>
            CB
        </Logo>
     );
}
 
export default LogoComponent;