import React from 'react';

interface SearchResultsProps {
  artistResults: any[];
  songResults: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ artistResults, songResults }) => {
  return (
    <div className="results-section">
      {/* <h2>Artist Results</h2> */}
      <ul>
        {artistResults.map(artist => (
          <li key={artist.id}>
            {artist.name} - {artist.genre} - {artist.country}
          </li>
        ))}
      </ul>

      {/* <h2>Song Results</h2> */}
      <ul>
        {songResults.map(song => (
          <li key={song.id}>
            {song.title} - {song.album} ({song.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
