import { useState, useRef } from 'react'
import song from './lofitunes.mp3'
import ControlPanel from './components/controls/ControlPanel'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef()

    const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  return (
    <div className='app-container'>
      <audio
        ref={audioRef}
        src={song}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
      />
    </div>
  )
}

export default App
