import React from 'react'
import './Music.css'

function Music({ play, isPlaying }) {
  return (
    <div className='btn-container'>
      <div onClick={play} className={isPlaying ? 'btn-stop' : 'btn-play'}></div>
    </div>
  )
}
export default Music
