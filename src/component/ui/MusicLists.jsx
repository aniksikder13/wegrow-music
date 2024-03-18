import Card from './Card'; 
import musicList from '../../utility/music.json';
import { useState } from 'react'; 

export default function MusicLists({ search, type }) {
  // State to manage the currently playing music index
  const [playingIndex, setPlayingIndex] = useState(null);

  let selectedMusicLists

  if(type==='trending') {
    selectedMusicLists= musicList?.filter(music => music.release > new Date().getFullYear() - 2 )
  } else {
    selectedMusicLists= musicList?.slice().sort((a, b) => b.rating - a.rating)
  }

  // Filter based on search term (if provided)
  const musicToDisplay = search
    ? selectedMusicLists.filter((music) => music.title.toLowerCase().includes(search.toLowerCase()))
    : selectedMusicLists;

    const handlePlayPause = (index) => {
      setPlayingIndex(index === playingIndex ? null : index)
    }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {musicToDisplay?.map((music, index) => (
        <Card
          key={index}
          title={music.title}
          artist={music.artist}
          audioSrc={music.musicSrc}
          isPlaying={index === playingIndex} // Pass isPlaying state to Card
          onPlayPause={() => handlePlayPause(index)} // Pass handlePlayPause for Card interaction
        />
      ))}
    </div>
  );
}
