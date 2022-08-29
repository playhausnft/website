import React from 'react'
import styled from 'styled-components'
import LandingImg from '../assets/Landing House.png'


const VideoContainer = styled.div`

img{
    width: 100%;
    height: 100%;
}

`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <img src={LandingImg} />
    </VideoContainer>
  )
}

export default CoverVideo