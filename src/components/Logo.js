import React from 'react'
import styled from 'styled-components';
import imglogo from "../assets/Nfts/Logo.png";

const ImgLogo = styled.div`
&:hover{
  transform: scale(1.2);
  transition: all 0.3s ease;
`

const Logo = () => {
  return (
            <ImgLogo>
            <img width={120} height={126}  src={imglogo} alt="Playhaus Logo" />
            </ImgLogo>
            
  )
}

export default Logo