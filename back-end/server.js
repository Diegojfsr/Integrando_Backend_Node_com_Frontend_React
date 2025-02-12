const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('Welcome to the Music API');
});

// Dados (pode ser movido para uma base de dados real mais tarde)
const artists = require('./data/artists.json');
const songs = require('./data/songs.json');

// Endpoint de busca
app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const artistResults = artists.filter(artist =>
    artist.name.toLowerCase().includes(query)
  );
  const songResults = songs.filter(song =>
    song.title.toLowerCase().includes(query)
  );
  res.json({ artistResults, songResults });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
