import React from "react";

const BookResults = ({ bookresults }) => {
    // console.log(bookresults);
    return (
        <div>
            {
                bookresults.map((book, index) => (
                    (!book || book.lengh === 0) ? <h1>Loading</h1> :
                        <div key={index}>
                            <a href={book.Item.itemUrl} target="_blank" rel="noreferrer">
                                <img src={book.Item.largeImageUrl} alt="" />
                            </a>
                            <h1>{book.Item.title}</h1>
                            <h2>{book.Item.itemPrice}円</h2>
                        </div>
                ))
            }
        </div >
    )
}

export default BookResults;