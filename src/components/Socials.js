import React from 'react'
import styled from 'styled-components'
import Twitter from '../Icons/Twitter'
import Discord from './Icons/Discord'
import MusicPlayer from '../MusicPlayer'

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding: 0.9rem 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`

const Socials = () => {
  return (
    <IconList>
    <a href="https://twitter.com/PlayhausNFT" target='_blank' 
    rel="noopener noreferrer"
    aria-label='twitter'
    >
      <Twitter />
    </a>
      <Discord />
      <div>
      <MusicPlayer />
      </div>
      
     </IconList>       
  )
}

export default Socials