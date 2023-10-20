import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookResults = ({ bookresults }) => {
    const [commentData, setCommentData] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:3000").then((response) => {
            setCommentData(response.data);
        });
    }, [bookresults]);


    return (
        <div className="my-6 mr-8">
            {
                bookresults.map((book, index) => (
                    (!book || book.lengh === 0) ? <h1>Loading</h1> :
                        <div key={index} className="w-30 ml-40">
                            <a className="" href={book.Item.itemUrl} target="_blank" rel="noreferrer">
                                <img src={book.Item.largeImageUrl} alt="" />
                            </a>
                            <div className="mb-8">
                                <h1 className="text-start">{book.Item.title}</h1>
                                <h2 className="w-40">{book.Item.itemPrice}円<Link to={"/comment/" + book.Item.isbn} state={{ title: book.Item.title }} >コメントを書く</Link></h2>
                            </div>
                            {commentData.map((comment, index) => (
                                book.Item.isbn === comment.isbn && <div key={index}>{comment.comments}</div>
                            ))}
                        </div>
                ))
            }
        </div >
    )
}

export default BookResults;
