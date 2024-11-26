import React from 'react';
import { Song } from '@/data/playlist'; // Import the Song type

interface RightmostComponentProps {
  currentSong: Song | null;
}

const RightmostComponent: React.FC<RightmostComponentProps> = ({ currentSong }) => {
  if (!currentSong) {
    return (
      <div className="flex flex-col w-1/4 bg-gray-800 p-6  shadow-lg">
        <p className="text-white text-center text-xl">No song playing</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-1/4 bg-gray-800 p-6 shadow-lg">
      <div className="h-full bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-white text-2xl font-semibold">{currentSong.title}</h3>
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-56 h-56 object-cover rounded-lg mt-4 mb-4 border-2 border-gray-500 shadow-md"
        />
        <p className="text-gray-400 text-sm">{currentSong.description}</p>
        <p className="text-white mt-2 font-medium">Singer: {currentSong.singer}</p>
      </div>
    </div>
  );
};

export default RightmostComponent;
