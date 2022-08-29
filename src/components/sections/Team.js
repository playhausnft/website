import React, { Suspense } from 'react'
import styled from 'styled-components';

import img1 from '../../assets/Nfts/Xaos.png';
import img2 from '../../assets/Nfts/Pudding.png';
import img3 from '../../assets/Nfts/Tkyomilk.png';
import img4 from '../../assets/Nfts/Juzvibes.png';
import img5 from '../../assets/Nfts/Xaos.png';
import img6 from '../../assets/Nfts/Xaos.png';
import img7 from '../../assets/Nfts/Xaos.png';
import img8 from '../../assets/Nfts/Xaos.png';
import Loading from '../Loading';
// import ConfettiComponent from '../Confetti';

// const ConfettiComponent = lazy(() => import("../Confetti"));


const Section = styled.section`
min-height: 80vh;
width: 100vw;
background-color: ${(props) => props.theme.sllight};
position: relative;
overflow: hidden;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.sldarkblue};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;

  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
width: 90%;
justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 1rem;
color: ${props => props.theme.sllight};
margin: 1rem 0rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

}

@media (max-width: 30em){
width: 70vw;
}

`

const ImageContainer = styled.div`
width: 90%;
margin: 0 auto;


img{
  width: 100%;
  height: auto;
  border-radius: 20px;
  cursor: pointer;
transition: all 0.3s ease;

}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.sldarkblue};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
`

const MemberComponent = ({img, name=" ",position=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img width={500} height={400}  src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id="team">
    <Suspense fallback={<Loading />}>
     </Suspense>
      <Title>Team</Title>
      <Container>
    
        <MemberComponent img={img1}  name="Xaos" position="Co-Founder" />
        <MemberComponent img={img2}  name="Pudding" position="Co-Founder" />
        <MemberComponent img={img3}  name="Tkyomilk" position="Legal Counsel" />
        <MemberComponent img={img4}  name="John" position="Community Moderator" />
    

      </Container>
    </Section>
  )
}

export default Team