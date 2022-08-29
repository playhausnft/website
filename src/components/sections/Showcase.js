import React, { useRef, Suspense } from 'react'
import styled, { keyframes } from 'styled-components'
import Loading from '../Loading'

import img1 from '../../assets/Nfts/Ellie.jpg';
import img2 from '../../assets/Nfts/Luna.jpg';
import img3 from '../../assets/Nfts/Luna2.jpg';
import img4 from '../../assets/Nfts/Luna3.jpg';
import img5 from '../../assets/Nfts/Luna4.jpg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import img10 from '../../assets/Nfts/bighead-9.svg';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.sllight};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;

  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;

  }
}
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 4rem 0;
display: flex;


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 2rem;
background-color:${props => props.theme.sldarkblue};
border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};


border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => props.theme.slbronze};
  font-weight:600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};

  }

}

`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;

}
`

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.sldarkblue}};
  align-self: flex-start;
  justify-content: center;
  text-align: center;
  width: 40%;
  margin: 1rem auto;
  font-weight:400;
  font-style: italic;

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

const NftItem = ({img, name, breed, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}


  return(
    <ImgContainer   onMouseOver={e => pause(e) }  onMouseOut={e => play(e) }  >
      <img width={500} height={400}  src={img} alt="Story" />
      <Details>
        <div>
          <span>{name}</span> <br />
          <span>{breed}</span>
        </div>

        <div>
        </div>
      </Details>
    </ImgContainer>
  )
} 


const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return(
<Section id="showcase">
    <Suspense fallback={<Loading />}>
     </Suspense>

     <Title>The story of your pet's life</Title>
     <SubTextLight>Every dog, every cat has a story. Join us as we explore the relationships with our furry companions and immortalise their special place in our hearts with Playhaus</SubTextLight>
    <Row direction="none" ref={Row1Ref}>
      <NftItem img={img1}  name={"Ellie"} breed={"Golden Retriever"} />
      <NftItem img={img2}  name={"Luna"} breed={"Golden Retriever"} />
      <NftItem img={img3}  name={"Pidan"} breed={"Maine Coon Norwegian Mix"} />
      <NftItem img={img4}  name={"Luna 2 Test"} breed={"Golden Retriever Test"} />


    </Row>
    <Row direction="reverse" ref={Row2Ref}>



    </Row>
    </Section>
  )
}

export default Showcase