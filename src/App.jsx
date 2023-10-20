import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import BookResults from "./components/BookResults.jsx";
import InputTitle from "./components/InputTitle.jsx";
import './App.css';
import Comment from "./components/Comment.jsx";


// const APP_ID = process.env.REACT_APP_ID;
const APP_ID = import.meta.env.VITE_APP_ID;

function App() {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState('');

  const handleChangeText = (newText) => {
    setText(newText);
  }


  const handleSearch = () => {
    const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${text}&applicationId=${APP_ID}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.Items);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div>
            <InputTitle handleChangeText={handleChangeText} text={text} handleSearch={handleSearch} />
            <BookResults bookresults={books} />
          </div>
        } />
        <Route path="/comment/:isbn" element={<Comment />} />
      </Routes>

    </div>
  );
}

export default App;
