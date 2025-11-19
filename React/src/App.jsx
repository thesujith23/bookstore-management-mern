import Book from './Book';
import React, { useEffect, useState } from 'react';
import "./App.css";
import axios from 'axios';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

function App() {

  // 🔥 ALL HOOKS MUST BE AT TOP
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // 🔥 Fetch books only when logged in
  useEffect(() => {
    if (isLoggedIn) {
      fetchBooks();
    }
  }, [isLoggedIn]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    };
  };

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/books', getAuthHeaders());
      setBooks(res.data);
    } catch (err) {
      console.error("Error loading books", err);
    }
  };

  const AddBook = async (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Enter both fields");

    try {
      const res = await axios.post(
        'http://localhost:5000/api/books',
        { title, author },
        getAuthHeaders()
      );
      setBooks([...books, res.data]);
      setTitle("");
      setAuthor("");
    } catch (err) {
      console.error(err);
    }
  };

  const BookDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`, getAuthHeaders());
      setBooks(prev => prev.filter(b => b._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const FilteredSearch = books.filter(book =>
    (book.title || "").toLowerCase().includes(search.toLowerCase())
  );


  // 🔥 UI CONDITIONALS (SAFE — NO HOOKS HERE)
  if (!isLoggedIn) {

    // show signup screen
    if (showSignup) {
      return <Signup switchToLogin={() => setShowSignup(false)} />;
    }

    // show login screen
    return (
      <Login
        onLoginSuccess={() => setIsLoggedIn(true)}
        switchToSignup={() => setShowSignup(true)}
      />
    );
  }

  // 🔥 BOOK SCREEN
  return (
    <>
      <h1>Login Successful!</h1>

      <button onClick={()=>{localStorage.removeItem('token'); setIsLoggedIn(false);}}>Logout</button>
      <form onSubmit={AddBook}>
        <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button>Add</button>
      </form>

      <input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />

      {FilteredSearch.map(book => (
        <Book
          key={book._id}
          id={book._id}
          title={book.title}
          author={book.author}
          deletee={BookDelete}
        />
      ))}

      {FilteredSearch.length === 0 && <p>No Books Found</p>}
    </>
  );
}

export default App;
