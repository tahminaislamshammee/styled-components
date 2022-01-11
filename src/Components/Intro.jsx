import styled from "styled-components";
import Me from '../assets/Images/profile-img.png'

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

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    transition: all 1s ease-in; 

.pic {
    position: absolute;
    bottom: 0;
   left: 50%;
   transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
    transition: all 1s ease-in;
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
        <Box>
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm CodeBucks</h3>
                    <h6>I design and code simple yet beautiful websites.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <div>
                    <img src={Me} alt="profile pic" className="pic"/>
                </div>
            </SubBox>
        </Box>
     );
}
 
export default Intro;