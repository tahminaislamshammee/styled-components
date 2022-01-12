import styled from "styled-components";
import Me from '../assets/Images/profile-img.png'
import { motion } from "framer-motion";

const Box = styled(motion.div)`
    width: 65vw;
    height: 55vh;
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

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    transition: all 5s ease-in; 

.pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
    
}
`

const Text = styled.div`
    font-size: 20px;
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;

    &>*:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    }
`

const Intro = () => {
    return ( 
        <Box 
        initial={{height: 0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration: 2, delay: 1}}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm CodeBucks</h3>
                    <h6>I design and code simple yet beautiful websites.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 1, delay: 2}}
                >
                    <img src={Me} alt="profile pic" className="pic"/>
                </motion.div>
            </SubBox>
        </Box>
     );
}
 
export default Intro;