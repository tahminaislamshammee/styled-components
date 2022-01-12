import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.a`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 17rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`
const Image = styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 60%;
    background-size: cover;
    border: 1px solid transparent;
    background-position: center center;
`

const Title = styled.h3`
    color: inherit;
    padding: 0.5rem 0;
    padding-top: 1rem;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    display: flex;
    flex-grow: 1;
    border-bottom: 1px solid ${props => props.theme.text};
`
const BlogComponents = (props) => {
   const {name, tags, date, imgSrc, link} = props.blog;
    return ( 
       <Box href={link} target="_blank">
          <Image img={imgSrc}/>
           <Title>{name}</Title>
       </Box> 
    );
}
 
export default BlogComponents;