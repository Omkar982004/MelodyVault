'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Song } from '@/data/playlist';
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';

interface BottomControlsProps {
  isPlaying: boolean;
  togglePlayPause: () => void;
  volume: number;
  changeVolume: (volume: number) => void;
  currentSong: Song | null;
  onNextSong: () => void;
  onPrevSong: () => void;
}

const BottomControls: React.FC<BottomControlsProps> = ({
  isPlaying,
  togglePlayPause,
  volume,
  changeVolume,
  currentSong,
  onNextSong,
  onPrevSong,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // Play or pause the song when the isPlaying state changes
  useEffect(() => {
    if (audioRef.current && currentSong) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  // Update volume and mute state whenever these states change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  // Handle song end event to automatically play the next song
  useEffect(() => {
    if (audioRef.current) {
      const handleSongEnd = () => {
        onNextSong();
      };

      audioRef.current.addEventListener('ended', handleSongEnd);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleSongEnd);
        }
      };
    }
  }, [onNextSong]);

  // Update current time and duration when the song is loaded
  useEffect(() => {
    if (audioRef.current) {
      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current!.currentTime);
        setDuration(audioRef.current!.duration || 0);
      };

      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }
  }, [currentSong]);

  // Add keyboard event listener for spacebar play/pause
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault(); // Prevent scrolling with spacebar
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [togglePlayPause]);

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = (parseFloat(event.target.value) / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="bg-gray-800 p-4 flex justify-between h-21 items-center sticky bottom-0 left-0 right-0 z-10 shadow-lg">
      {/* Song Info */}
      <div className="flex items-center w-64 space-x-4 h-21 overflow-hidden">
        {currentSong ? (
          <div className="text-white w-64">
            <h4 className="text-sm font-semibold truncate">{currentSong.title}</h4>
            <p className="text-xs truncate">{currentSong.singer}</p>
          </div>
        ) : (
          <p className="text-white">No song selected</p>
        )}
      </div>

      {/* Controls Section */}
      <div className="flex flex-col items-center w-2/4 space-y-2 mr-16 h-21">
        {/* Buttons Section */}
        <div className="flex items-center space-x-6">
          <button
            onClick={onPrevSong}
            className="text-white bg-gray-600 hover:bg-gray-700 p-3 rounded-full transition duration-200"
            disabled={!currentSong}
          >
            <FaStepBackward />
          </button>

          <button
            onClick={togglePlayPause}
            className={`text-white p-3 rounded-full transition duration-200 ${
              currentSong ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 cursor-not-allowed'
            }`}
            disabled={!currentSong}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button
            onClick={onNextSong}
            className="text-white bg-gray-600 hover:bg-gray-700 p-3 rounded-full transition duration-200"
            disabled={!currentSong}
          >
            <FaStepForward />
          </button>
        </div>

        {/* Progress Bar and Durations */}
        <div className="flex items-center space-x-4 w-full">
          <div className="text-white text-sm w-12 text-right">
            {currentSong && formatTime(currentTime)}
          </div>
          <input
            type="range"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
            min="0"
            max="100"
            className="flex-1 h-2 bg-gray-600 rounded-full accent-green-500"
          />
          <div className="text-white text-sm w-12 text-left">
            {currentSong ? formatTime(duration) : '00:00'}
          </div>
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2 w-32 mr-16">
        <button
          onClick={toggleMute}
          className="text-white p-3 rounded-full bg-gray-600 hover:bg-gray-700 transition duration-200"
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          value={isMuted ? 0 : volume}
          onChange={(e) => changeVolume(Number(e.target.value))}
          min="0"
          max="100"
          className="w-full h-2 bg-gray-600 rounded-full accent-green-500"
          disabled={isMuted}
        />
      </div>

      <audio ref={audioRef} src={currentSong?.path || ''} muted={isMuted} />
    </div>
  );
};

export default BottomControls;
