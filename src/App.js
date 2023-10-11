import { useState, useEffect } from "react";
import BookResults from "./components/BookResults.jsx";
import InputTitle from "./components/InputTitle.jsx";
import './App.css';

const APP_ID = '1074959321636253206'

// const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=小学館の図鑑NEO〔新版〕 動物 DVDつき&applicationId=${APP_ID}`;
const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=陰の実力者&applicationId=${APP_ID}`;


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBook = () => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.Items)
          // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
          setBooks(data.Items);
        })
        .catch((error) => {
          console.error(error);
        })
    }
    getBook();
  }, [])

  return (
    <div className="App">
      <InputTitle />
      <BookResults bookresults={books} />

    </div>
  );
}

export default App;
