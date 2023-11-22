import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

 // Include your CSS file for styling

// Main App component
const Profile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate()
 // Function to handle search
const handleSearch = () => {
  axios
  .get(`http://localhost:8080/profile`, {
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


  return (
    <div >
      {/* Search input and filter dropdown */}
      <div>
        {/* <h2 className='head'>Library Search System</h2> */}
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
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Search results table */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((profile, index) => (
              <tr key={index}>
                <td className='profile'>{profile.Name}</td>
                <td className='profile'>{profile.Age}</td>
                <td className='profile'>{profile.Email}</td>
                <td className='profile'>{profile.Phone}</td>
                <td className='profile'>{profile.Location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;