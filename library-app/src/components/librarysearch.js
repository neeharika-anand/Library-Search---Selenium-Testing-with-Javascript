import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
 // Include your CSS file for styling

// Main App component
const Librarysearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate()

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        handleSearch();
      } else if (event.shiftKey && event.code === "ShiftLeft") {
        console.log("Shift key was pressed. Redirecting to /profile.");
        navigate('/profile');
      }
    };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

 // Function to handle search
const handleSearch = () => {
  axios
  .get(`http://localhost:8080/search`, {
        params: {searchTerm: searchTerm, selectedCategory: selectedCategory},
      })
      .then((response) => {
        console.log('respnse'+ JSON.stringify(response));
        setSearchResults(response.data);
        console.log("tour details", searchResults);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  
};


  return (
    <div className="App">
      {/* Search input and filter dropdown */}
      <div>
        {/* <h2>Library Search System</h2> */}
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">Select</option>
          <option value="title">Title</option>
          <option value="ISBN">ISBN</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
        <button id='searchbutton' onClick={handleSearch}>Search</button>
      </div>

      {/* Search results table */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>ISBN</th>
              <th>Author</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((book, index) => (
              <tr key={index}>
                <td className='book'>{book.title}</td>
                <td className='book'>{book.ISBN}</td>
                <td className='book'>{book.author}</td>
                <td className='book'>{book.genres}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Librarysearch;
