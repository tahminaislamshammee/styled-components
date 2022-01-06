import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaceBook, GitHub, PowerBtn, Twitter, Youtube } from "../Components/AllSvgs";
import { DarkTheme, darkTheme } from "../Components/Themes";

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.theme.text};
`

const SocialIcons = (props) => {
   
    return ( 
        <Icons>

            <div>
                <NavLink to={{pathname: "https://github.com/"}} style={{color: 'inherit'}} target='_blank' >
                    <GitHub width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
                   
                </NavLink>
            </div>
            <div>
                <NavLink to={{pathname: "https://twitter.com/"}} style={{color: 'inherit'}} target='_blank'>
                    <Twitter width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
                    
                </NavLink>
            </div>
            <div>
                <NavLink to={{pathname: "https://facebook.com/"}} style={{color: 'inherit'}} target='_blank'>
                    <FaceBook width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
                </NavLink>
            </div>
            <div>
                <NavLink to={{pathname: "https://youtube.com/"}} style={{color: 'inherit'}} target='_blank'>
                    <Youtube width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
                </NavLink>
            </div>
            <Line/>
        </Icons>
     );
}
 
export default SocialIcons;