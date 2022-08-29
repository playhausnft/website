import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.slgreen};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
    font-size: ${(props) => props.theme.fontsm};
    text-transform: capitalize;
    width: 80%;
    color: ${(props) => props.theme.slbronze};
    align-self: flex-start;   
  }
  .text-2{
      color: #f1c14d;
  }
  .text-3{
      color: #89c7a6;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }
    
`

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => props.theme.slgreen};
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
  align-self: center;
    text-align:center;
  }
  
`
const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`
const TypeWriterText = () => {
  return (
    <>
        <Title>
      Welcome to the Playhaus
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">Be part of something different</span>`)
            .pauseFor(500)
            .deleteAll()
            .start();
        }}
      />
      
    </Title>
    <SubTitle>Community for pets, pet owners and pet lovers</SubTitle>
    <ButtonContainer>
    <Button text="Discord Coming Soon" link="#home" />
    </ButtonContainer>

    </>
  );
};

export default TypeWriterText;
