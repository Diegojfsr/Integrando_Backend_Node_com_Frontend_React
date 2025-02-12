// import React, { useState } from 'react';
// import './App.css';
// import SearchForm from './components/SearchForm';
// import SearchResults from './components/SearchResults';
// import { searchDatabase } from './services/dataService';

// const App: React.FC = () => {
//   const [artistResults, setArtistResults] = useState<any[]>([]);
//   const [songResults, setSongResults] = useState<any[]>([]);

//   const handleSearch = (query: string) => {
//     const { artistResults, songResults } = searchDatabase(query);
//     setArtistResults(artistResults);
//     setSongResults(songResults);
//   };

//   return (
//     <div className="App">
//       <SearchForm onSearch={handleSearch} />
//       <SearchResults artistResults={artistResults} songResults={songResults} />
//     </div>
//   );
// };

// export default App;


// NOVO CODIGO - PUXANDO DO BACK END

import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { searchDatabase } from './services/dataService';

const App: React.FC = () => {
  const [artistResults, setArtistResults] = useState<any[]>([]);
  const [songResults, setSongResults] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    const { artistResults, songResults } = await searchDatabase(query);
    setArtistResults(artistResults);
    setSongResults(songResults);
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <SearchResults artistResults={artistResults} songResults={songResults} />
    </div>
  );
};

export default App;
