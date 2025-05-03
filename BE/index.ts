import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());

console.log(process.env.NODE_ENV_BASE_API)

app.get('/search', async (req, res) => {
    const { s = '' } = req.query;
    try {
      const response = await fetch(`${process.env.NODE_ENV_BASE_API}/search.php?s=${s}`);
      const data = await response.json();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

app.get('/recipes', async (req, res) => {
  try {
    const { i, c, a } = req.query;
    const params = new URLSearchParams();
    if (i) params.append('i', i as string);
    if (c) params.append('c', c as string);
    if (a) params.append('a', a as string);

    const url = `${process.env.NODE_ENV_BASE_API}/filter.php?${params.toString()}`;
    const result = await axios.get(url);
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

app.get('/recipes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await axios.get(`${process.env.NODE_ENV_BASE_API}/lookup.php?i=${id}`);
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

app.listen(process.env.NODE_ENV_PORT, () => {
  console.log(`Backend running at http://localhost:${process.env.NODE_ENV_PORT}`);
});
