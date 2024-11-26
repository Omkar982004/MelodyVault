import React from 'react';
import { Playlist, Song } from '@/data/playlist'; // Import Playlist and Song types

interface LeftSidebarProps {
  selectedPlaylist: Playlist | null;
  onSongSelect: (song: Song) => void; // Updated to handle song selection
  currentSong: Song | null; // Add currentSong prop to track the playing song
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ selectedPlaylist, onSongSelect, currentSong }) => {
  return (
    <div className="w-1/4 bg-gray-800 p-6 flex flex-col">
      {selectedPlaylist ? (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          {/* Playlist Title */}
          <h2 className="text-white text-2xl font-semibold mb-4">{selectedPlaylist.title}</h2>

          {/* Song List */}
          <ul className="text-white mt-4 h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800 hover:scrollbar-thumb-blue-700 transition-all duration-300">
            {selectedPlaylist.songs.map((song, index) => (
              <li
                key={index}
                className={`cursor-pointer p-3 mb-2 rounded-md transition-all duration-200 ease-in-out ${
                  currentSong?.title === song.title ? 'bg-gray-600' : 'hover:bg-gray-600'
                }`}
                onClick={() => onSongSelect(song)} // Allow song selection
              >
                <div className="flex justify-between items-center">
                  <span>{song.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-grow items-center justify-center bg-gray-700 p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <p className="text-white text-2xl font-semibold mb-2">No playlist selected</p>
            <p className="text-gray-300 text-lg">
              Select a playlist to view songs from that playlist
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
