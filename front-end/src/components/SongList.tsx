import React from 'react';
import { getSongs } from '../services/dataService';

const SongList: React.FC = () => {
  const songs = getSongs();

  return (
    <div>
      {/* <h2>Songs</h2> */}
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title} - {song.album} ({song.releaseYear})</li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
