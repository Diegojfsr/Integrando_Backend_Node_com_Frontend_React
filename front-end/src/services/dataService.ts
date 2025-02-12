// import artists from '../data/artists.json';
// import songs from '../data/songs.json';

// export const getArtists = () => {
//   return artists;
// };

// export const getSongs = () => {
//   return songs;
// };

// export const getSongsByArtistId = (artistId: number) => {
//   return songs.filter(song => song.artistId === artistId);
// };

// export const searchDatabase = (query: string) => {
//   const lowerQuery = query.toLowerCase();
//   const artistResults = artists.filter(artist =>
//     artist.name.toLowerCase().includes(lowerQuery)
//   );
//   const songResults = songs.filter(song =>
//     song.title.toLowerCase().includes(lowerQuery)
//   );
//   return { artistResults, songResults };
// };

// NOVO CODIGO-USANDO O BACK END

import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const searchDatabase = async (query: string) => {
  const response = await axios.get(`${API_URL}/search`, {
    params: { q: query },
  });
  return response.data;
};

