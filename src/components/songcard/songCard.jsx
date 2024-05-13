import React from 'react'
import './songCard.css'
import AlbumImages from './albumImages'
import AlbumInfo from './albumInfo'

export default function SongCard({album}) {
  return (
    <div className='songCard-body flex'>
      <AlbumImages url={album?.images[0]?.url}/>
      <AlbumInfo album={album}/>
    </div>

  )
}
