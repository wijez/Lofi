import './library.css'
import APIKit from '../../spotify.jsx'
import React, { useEffect, useState } from 'react'
import {IconContext} from 'react-icons'
import {AiFillPlayCircle} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'

export default function Library() {
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
    APIKit.get('/me/playlists').then(function (response) {
      setPlaylists(response.data.items)
      console.log(response.data.items)
    })
  }, [])
  const navigate = useNavigate()
  const playPlaylist = (id) => {
    navigate('/player',{ state: {id: id}})
  };
  return (
    <div className='screens-container' >
      <div className='library-box'>
        {playlists?.map((playlist) => (
          <div className='playlist-card' key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
              <img src={playlist.images[0].url} className='playlist-images'/>
              <p className='playlist-title'>{playlist.name}</p>
              <p className='playlist-subtitle'>{playlist.tracks.total} Songs </p>
              <div className='playlist-fade'>
                <IconContext.Provider value={{size:"50px",color: "#E99072"}}>
                   <AiFillPlayCircle/>
                </IconContext.Provider>
              </div>
              
          </div>
        ))}
      </div>
    </div>
  );
}
