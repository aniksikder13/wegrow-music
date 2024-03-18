import { useEffect, useRef, useState } from 'react';

// Function to format time in seconds to MM:SS
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const MusicPlayerCard = ({ title, artist, audioSrc, isPlaying, onPlayPause }) => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5); // Initial volume level
  const [duration, setDuration] = useState(0); // Initial duration
  const [currentTime, setCurrentTime] = useState(0); // Initial current time

  const handlePlayback = () => {
    // Delegate playback control to parent component
    onPlayPause(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const handleTimeChange = (e) => {
    setCurrentTime(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      // Ensure previous audio was actually paused
      audioRef.current.pause();
    }
    // Set the volume
    audioRef.current.volume = volume;

    // Update the duration when the metadata is loaded
    audioRef.current.onloadedmetadata = () => {
      setDuration(audioRef.current.duration);
    };

    // Update the current time periodically
    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  }, [isPlaying, volume, audioRef]);

  return (
    <div className="bg-white rounded-lg border-[1px] hover:shadow-md p-4">
      <div className='flex items-center justify-between'>
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-600 text-sm">{artist}</p>
        </div>
      
        <button
          className="bg-green-500 hover:bg-green-600 text-white text-sm px-2 py-1 rounded-sm "
          onClick={handlePlayback}
        >
          {!isPlaying ? 'Play' : 'Pause'}
        </button>
      </div>

      <div className="flex space-x-3 mt-2">
        <div className='w-[70%]'>
          <p className="text-gray-600 text-[0.75rem] flex justify-between"><span>Duration</span> <span>{formatTime(currentTime)} / {formatTime(duration)}</span></p>
          <input
            type="range"
            min="0"
            max={duration}
            step="1"
            value={currentTime}
            onChange={handleTimeChange}
            className="w-full"
          />
        </div>
        <div className='w-[30%]'>
          <p className="text-gray-600 text-[0.75rem] flex justify-between"><span>Volume</span> <span>{Math.round(volume * 100)}%</span></p>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
      <audio ref={audioRef} src={audioSrc} controls={false} onError={(error) => console.error('Audio loading error:', error)} />
    </div>
  );
};

export default MusicPlayerCard;
