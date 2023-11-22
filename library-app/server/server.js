const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));

// Replace 'your_database_uri' with your actual MongoDB URI
const MONGODB_URI = 'mongodb://localhost:27017/library';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Book schema
const bookSchema = new mongoose.Schema({
  
id: Number,
title: String, 
author: String, 
rating: String, 
price: String, 
publisher: String, 
page_count: String, 
genres: String, 
ISBN: String, 
published_date: String,
});
const profileSchema = new mongoose.Schema({
  

Name: String, 
Age: String, 
Gender: String, 
Occupation: String, 
Location: String, 
Email: String, 
Phone: String, 
});



// Create a Book model
const Book = mongoose.model('Book', bookSchema, 'books');
const Profile = mongoose.model('Profile', profileSchema, 'profiles')
// Middleware to parse JSON in requests
app.use(bodyParser.json());

// Endpoint to search for books
// ... (previous code remains unchanged)

// Endpoint to search for books
app.get('/search', async (req, res) => {
    try {
      const searchTerm = req.query.searchTerm;
      const selectedCategory = req.query.selectedCategory;
      console.log('search term' + searchTerm)
      console.log('category'+selectedCategory)
  
      if (!searchTerm || !selectedCategory) {
        return res.status(400).json({ error: 'Search term and selected category are required' });
      }
  
      // Define the search query based on the provided search term and selected category
      let query;
  
      switch (selectedCategory) {
        case 'title':
          query = { title: new RegExp(searchTerm, 'i') };
          console.log('entered title')
          break;
        case 'author':
          query = { author: new RegExp(searchTerm, 'i') };
          console.log('entered author')
          break;
        case 'ISBN':
          query = { ISBN: new RegExp(searchTerm, 'i') };
          console.log('entered isbn')
          break;
        case 'genre':
          query = { genres: new RegExp(searchTerm, 'i') };
          console.log('entered genre')
          break;
        default:
          return res.status(400).json({ error: 'Invalid selected category' });
      }
  
      // Perform the search
      const results = await Book.find(query);
      console.log(results)
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.get('/profile', async (req, res) => {
    try {
      const searchTerm = req.query.searchTerm;
      const selectedCategory = req.query.selectedCategory;
      console.log('search term' + searchTerm)
      console.log('category'+selectedCategory)
  
      if (!searchTerm || !selectedCategory) {
        return res.status(400).json({ error: 'Search term and selected category are required' });
      }
  
      // Define the search query based on the provided search term and selected category
      let query;
  
      switch (selectedCategory) {
        case 'name':
          query = { Name: new RegExp(searchTerm, 'i') };
          console.log('entered name')
          break;
        case 'email':
          query = { Email: new RegExp(searchTerm, 'i') };
          console.log('entered email')
          break;
        
        default:
          return res.status(400).json({ error: 'Invalid selected category' });
      }
  
      // Perform the search
      const results = await Profile.find(query);
      console.log(results)
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  // ... (remaining code remains unchanged)
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
