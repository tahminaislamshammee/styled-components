import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = styled(NavLink)`
    display: block;
    color: ${props => props.theme.text};
    font-family: 'Pacifico', cursive;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
    text-decoration: none;
    font-size: 30px;
`

const LogoComponent = () => {
    return ( 
        <Logo to="/">
            CB
        </Logo>
     );
}
 
export default LogoComponent;