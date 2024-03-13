const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Sample data for demonstration (replace with your database)
let articles = [];

// Define routes for CRUD operations on articles
// GET all articles
app.get('/articles-api', (req, res) => {
  res.json(articles);
});

// GET a specific article by ID
app.get('/articles-api/:id', (req, res) => {
  const id = req.params.id;
  const article = articles.find(article => article.id === id);
  if (!article) {
    res.status(404).json({ message: 'Article not found' });
  } else {
    res.json(article);
  }
});

// POST create a new article
app.post('/articles-api', (req, res) => {
  const newArticle = req.body;
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// PUT update an existing article
app.put('/articles-api/:id', (req, res) => {
  const id = req.params.id;
  const updatedArticle = req.body;
  const index = articles.findIndex(article => article.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Article not found' });
  } else {
    articles[index] = updatedArticle;
    res.json(updatedArticle);
  }
});

// DELETE an article by ID
app.delete('/articles-api/:id', (req, res) => {
  const id = req.params.id;
  const index = articles.findIndex(article => article.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Article not found' });
  } else {
    const deletedArticle = articles.splice(index, 1)[0];
    res.json(deletedArticle);
  }
});

// Sample data for demonstration (replace with your database)
let pers = [];

// Define routes for CRUD operations on pers
// GET all pers
app.get('/pers-api', (req, res) => {
  res.json(pers);
});

// GET a specific pers by ID
app.get('/pers-api/:id', (req, res) => {
  const id = req.params.id;
  const pers = pers.find(pers => pers.id === id);
  if (!pers) {
    res.status(404).json({ message: 'Pers not found' });
  } else {
    res.json(pers);
  }
});

// POST create a new pers
app.post('/pers-api', (req, res) => {
  const newPers = req.body;
  pers.push(newPers);
  res.status(201).json(newPers);
});

// PUT update an existing pers
app.put('/pers-api/:id', (req, res) => {
  const id = req.params.id;
  const updatedPers = req.body;
  const index = pers.findIndex(pers => pers.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Pers not found' });
  } else {
    pers[index] = updatedPers;
    res.json(updatedPers);
  }
});

// DELETE an pers by ID
app.delete('/pers-api/:id', (req, res) => {
  const id = req.params.id;
  const index = pers.findIndex(pers => pers.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Pers not found' });
  } else {
    const deletedPers = pers.splice(index, 1)[0];
    res.json(deletedPers);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
