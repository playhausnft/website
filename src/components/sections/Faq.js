import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: #051622;
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.slbronze};
  
  margin: 3rem auto;
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS PLAYHAUS?" >
  Playhaus is your lifestyle brand. We are starting with pets and pet owners, but everyone is welcomed, especially if you like dogs and cats. 
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="HOW DO I JOIN?" >
  Visit us on Twitter for the latest updates. Discord will be open shortly.

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="IP RIGHTS FOR PLAYHAUS HOLDERS?" >
  We do not even have an NFT collection (yet).
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="HOW DO I GET ON THE GUESTLIST?" >
Chill with us on Twitter / Discord (Coming Soon), share good vibes and lots of photos of your dogs and cats!
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHEN IS THE MINT?
" >
We do not even have an NFT collection (yet).
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="HOW MUCH IS THE MINT?
" >
Obviously free. Are there still paid mints these days? Oh, you'll need some gas duh.
  </Accordion>
  
</Box>
    </Container>
    </Section>
  )
}

export default Faq