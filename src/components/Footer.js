import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
// import Banner from './Banner'
import Twitter from '../Icons/Twitter'
import Discord from './Icons/Discord'
import Loading from './Loading'

const Banner = lazy(() => import("./Banner"));


const Section = styled.section`
min-height: 65vh;
width: 100vw;
background-color: ${props => props.theme.sllight};
position: relative;
color: ${(props) => props.theme.sldarkblue};

display: flex;
/* justify-content: center; */
/* align-items: center; */
flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.sldarkblue};

@media (max-width: 48em) {
width: 90%;

h1{
font-size: ${props => props.theme.fontxxxl};

}
}
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`
const MenuItems = styled.ul`
list-style:none;
width: 50%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em) {
display: none;
}
`
const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration:underline;
}
@media (max-width: 48em) {
flex-direction: column;
width: 100%;

span{
  margin-bottom: 1rem;
}
}
`

const Footer = () => {

  const scrollTo = (id) => {

    let element = document.getElementById(id);
  
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  
  return (
    <Section>
      
<Suspense fallback={<Loading />}>
<Banner /> </Suspense>

      <Container>
    <Left> 
    <IconList>
      <a href="https://twitter.com/PlayhausNFT" target='_blank' 
      rel="noopener noreferrer"
      aria-label='twitter'
      >
        <Twitter />
      </a>
      <a href="http://linkedin.com" target='_blank' 
      rel="noopener noreferrer"
      aria-label='discord'
      >
        <Discord />
      </a>
    </IconList>
    </Left>
    <MenuItems>
    <Item onClick={() => scrollTo('home')}  >Home</Item>
          <Item onClick={() => scrollTo('about')}  >About</Item>
          <Item onClick={() => scrollTo('showcase')}  >Story</Item>
          <Item onClick={() => scrollTo('team')}  >Team</Item>
          <Item onClick={() => scrollTo('faq')}  >Faq</Item>

    </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Playhaus. All rights reserved.
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer