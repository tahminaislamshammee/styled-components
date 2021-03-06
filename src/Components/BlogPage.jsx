import styled from "styled-components";
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { PowerBtn } from "./AllSvgs";
import {Blogs} from '../data/BlogData';
import BlogComponents from "./BlogComponents";
import Anchor from "../subComponents/AnchorComponet";
import AnchorComponent from "../subComponents/AnchorComponet";

const MainContainer = styled.div`
background-image: url(${img});
width: 100%;
height: auto;
background-size: cover;
background-repeat: no-repeat;
background-position: center;

`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
flex-direction: column;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const BlogPage = (props) => {

    return ( 
        <MainContainer>
            <Container>
                <LogoComponent/>
                <PowerButton />
                <SocialIcons />
                <AnchorComponent/>
                <Center>
                    <Grid>
                       {
                        Blogs.map(blog => <BlogComponents key={blog.id} blog={blog}/>)
                       }
                    </Grid>
                </Center>
            </Container>
        </MainContainer>
     );
}
 
export default BlogPage;