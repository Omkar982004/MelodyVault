import React from 'react';
import { Playlist } from '@/data/playlist'; // Import Playlist type

interface RightSidebarProps {
  playlists: Playlist[];
  setSelectedPlaylist: React.Dispatch<React.SetStateAction<Playlist | null>>;
  selectedPlaylist: Playlist | null; // Pass selectedPlaylist as a prop
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  playlists,
  setSelectedPlaylist,
  selectedPlaylist,
}) => {
  return (
    <div className="w-3/4 bg-gray-900 p-4">
      <h2 className="text-white text-xl">Playlists</h2>
      {/* Scrollable container for playlists */}
      <div
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto"
        style={{ maxHeight: '65vh' }} // Set the height limit for the scrollable area
      >
        {playlists.map((playlist, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4 rounded-lg shadow-md ${
              selectedPlaylist?.title === playlist.title
                ? 'bg-blue-700'
                : 'bg-gray-800'
            }`}
            onClick={() => setSelectedPlaylist(playlist)} // Set the clicked playlist as selected
          >
            <img
              src={playlist.cover}
              alt={playlist.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-white mt-2 text-lg">{playlist.title}</h3>
            <p className="text-gray-400 text-sm">{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
