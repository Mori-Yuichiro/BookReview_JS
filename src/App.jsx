import { useState } from "react";
import BookResults from "./components/BookResults.jsx";
import InputTitle from "./components/InputTitle.jsx";
import './App.css';


// const APP_ID = process.env.REACT_APP_ID;
const APP_ID = import.meta.env.VITE_APP_ID;
console.log(APP_ID);

// const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=小学館の図鑑NEO〔新版〕 動物 DVDつき&applicationId=${APP_ID}`;
// const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=陰の実力者&applicationId=${APP_ID}`;


function App() {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState('');

  const handleChangeText = (newText) => {
    setText(newText);
  }

  const handleSearch = () => {
    const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${text}&applicationId=${APP_ID}`;
    // useEffect(() => {
    // const getBook = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.Items);
      })
      .catch((error) => {
        console.error(error);
      })
    //   }
    //   getBook();
    // }, [])
  }

  return (
    <div className="App">
      <InputTitle handleChangeText={handleChangeText} text={text} handleSearch={handleSearch} />
      <BookResults bookresults={books} />

    </div>
  );
}

export default App;
