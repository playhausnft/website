import React, { lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';
import Loading from '../Loading';
import img5 from '../../assets/Nfts/webwarhol.png';


const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${(props) => props.theme.sllight};
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

`
const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;
@media (max-width: 70em){
  width: 85%;
}

@media (max-width: 64em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
@media (max-width: 40em){
  

  &>*:last-child{
    width: 90%;
  }
}
`
const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}
`
 
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: none;
  color: ${(props) => props.theme.sldarkblue};
  align-self: flex-start;
  width: 80%;
margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontxl};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontlg};

}
`
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight:400;


@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontsm};

}

`
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.sldarkblue}};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight:400;
line-height: 2;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontxs};

}

`

const HomeTest = () => {
  return (
    <Section id="about">
      <Container>
        
      <Box> 
        <Suspense fallback={<Loading />}>
        <img width={500} height={500}  src={img5} alt="The Playhaus" /> </Suspense> 
        </Box>

        
        <Box> 
        <Title>
        What is Playhaus?
        </Title>
        <SubTextLight>
        Our story all started with a cat and a dog, and their pawrents who wanted to build a community that centers around good vibes and happiness, for their pets and pet owners alike. 
        <br />
        <br />
        Playhaus, your web3 brand for pets, pet owners and pet lovers.
        Our vision is to create a wholesome and light-hearted community for you to share your experiences, stories and the love for your pets. 

         </SubTextLight>
        

         </Box>

        
      </Container>
    </Section>
  )
}

export default HomeTest


