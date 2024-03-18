import { useEffect, useRef } from 'react';


const MusicPlayerCard = ({ title, artist, audioSrc, isPlaying, onPlayPause }) => {
  const audioRef = useRef(null);

  const handlePlayback = () => {
    // Delegate playback control to parent component
    onPlayPause(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      // Ensure previous audio was actually paused
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]); 

  return (
    <div className="flex items-center bg-white rounded-lg border-[1px] hover:shadow-md p-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600 text-sm">{artist}</p>
      </div>
      <div className="flex ml-auto">
        <button
          className="bg-green-500 hover:bg-green-600 text-white text-sm px-2 py-1 rounded-sm "
          onClick={handlePlayback}
        >
          {!isPlaying ? 'Play' : 'Pause'}
        </button>
      </div>
      <audio ref={audioRef} src={audioSrc} controls={false} onError={(error) => console.error('Audio loading error:', error)} />
    </div>
  );
};

export default MusicPlayerCard;
