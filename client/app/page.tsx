'use client';

import { useState } from 'react';
import LeftSidebar from '@/components/leftsidebar';
import RightSidebar from '@/components/rightsidebar';
import BottomControls from '@/components/bottomcontrols';
import RightmostComponent from '@/components/rightmostsidebar';
import { playlists, Playlist, Song } from '@/data/playlist'; // Import playlists data

const MainPage: React.FC = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null); // Track the currently selected song
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50); // default volume set to 50

  const playSong = (song: Song) => {
    setCurrentSong(song); // Set the current song
    setIsPlaying(true); // Start playing the song
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const changeVolume = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleSongSelect = (song: Song) => {
    setCurrentSong(song); // Update the selected song
    setIsPlaying(true); // Start playing the selected song
  };

  const handleNextSong = () => {
    if (selectedPlaylist && currentSong) {
      const currentIndex = selectedPlaylist.songs.indexOf(currentSong);
      const nextIndex = (currentIndex + 1) % selectedPlaylist.songs.length;
      playSong(selectedPlaylist.songs[nextIndex]);
    }
  };

  const handlePrevSong = () => {
    if (selectedPlaylist && currentSong) {
      const currentIndex = selectedPlaylist.songs.indexOf(currentSong);
      const prevIndex = (currentIndex - 1 + selectedPlaylist.songs.length) % selectedPlaylist.songs.length;
      playSong(selectedPlaylist.songs[prevIndex]);
    }
  };

  

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 p-4">
        <h1 className="text-white text-2xl">Spotify Clone</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <LeftSidebar
          selectedPlaylist={selectedPlaylist}
          currentSong={currentSong}
          onSongSelect={handleSongSelect} // Pass the function to select a song
        />
        {/* Central All Playlists */}
        <RightSidebar
          playlists={playlists}
          setSelectedPlaylist={setSelectedPlaylist}
          selectedPlaylist={selectedPlaylist} // Pass selectedPlaylist to RightSidebar
        />
        
        {/* Rightmost Component - Current Song */}
        <RightmostComponent currentSong={currentSong} />
      </div>

      {/* Bottom Control Bar */}
      <BottomControls
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        volume={volume}
        changeVolume={changeVolume}
        currentSong={currentSong}
        onNextSong={handleNextSong}
        onPrevSong={handlePrevSong}
      />
    </div>
  );
};

export default MainPage;
