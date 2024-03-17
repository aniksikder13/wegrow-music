import React from 'react'
import Card from '../component/ui/Card'
import musicList from '../utility/music.json'

export default function TrendingMusic({search}) {

    const raw_music_file= musicList?.filter(music => music.release > new Date().getFullYear() - 2 )
    const music_list= search ? raw_music_file?.filter(music => music.title.includes(search)) : raw_music_file

  return (
    <div className='grid grid-cols-4 gap-4'>
        
        {
            music_list?.map((music, index) => <Card key={index} title={music.title} artist={music.artist} audioSrc={music.musicSrc} />)
        }
        
    </div>
  )
}
