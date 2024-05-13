import React, {useState, useEffect} from 'react'


import Feed from '../feed/feed.jsx'
import Login from '../auth/login.jsx'
import Player from '../player/player.jsx'
import Library from '../library/library.jsx'
import Trending from '../trending/trending.jsx'
import Favorites from '../favorites/favorites.jsx'

import './home.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from '../../components/sidebar/index.jsx'
import { setClientToken } from '../../spotify.jsx'


export default function Home() {
  const [token,setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const hash = window.location.hash
    window.location.hash='' 
    if(!token && hash){
      const _token = hash.split('&')[0].split('=')[1]
      window.localStorage.setItem("token", _token)
      setToken(_token)
      setClientToken(_token)
    }
    else{
      setToken(token)
      setClientToken(token)
    }
    
  }, [])
  return !token ?(<Login/>) :
   (
    <Router>
      <div className='main-body'>
      <Sidebar/>
   
      <Routes>
        <Route path='/' element={<Library />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/player' element={<Player />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes> 
      </div>
    </Router>
  )
}
