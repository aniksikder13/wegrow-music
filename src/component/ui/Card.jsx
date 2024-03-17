import { useState, useRef } from 'react';


const MusicPlayerCard = ({ title, artist, artworkUrl, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  return (
    <div className="flex items-center bg-white rounded-lg border-[1px] hover:shadow-md p-4">
      {/* <img
        src={artworkUrl}
        alt={title}
        className="w-20 h-20 rounded-lg mr-4"
      /> */}
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600 text-sm">{artist}</p>
      </div>
      <div className="flex ml-auto">
        <button
          className="bg-green-500 hover:bg-green-600 text-white text-sm px-2 py-1 rounded-sm "
          onClick={togglePlayPause}
        >
          {!isPlaying ? 'Play' : 'Pause'}
        </button>
      </div>
      <audio ref={audioRef} src={audioSrc} controls={false} />
    </div>
  );
};

export default MusicPlayerCard;
