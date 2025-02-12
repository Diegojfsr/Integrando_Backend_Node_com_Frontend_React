import React from 'react';
import { getArtists } from '../services/dataService';

const ArtistList: React.FC = () => {
  const artists = getArtists();

  return (
    <div>
      {/* <h2>Artists</h2> */}
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name} - {artist.genre} - {artist.country}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
