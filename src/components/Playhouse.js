import React from 'react'
import styled from 'styled-components'
import LandingImg from '../assets/Landing House.png'


const ImgContainer = styled.div`

img{
    width: 100%;
    height: 100%;
}

`

const Playhouse = () => {
  return (
    <ImgContainer>
        <img src={LandingImg} />
    </ImgContainer>
  )
}

export default Playhouse