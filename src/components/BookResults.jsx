import React from "react";

const BookResults = ({ bookresults }) => {
    // console.log(bookresults);
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
                                <h2 className="w-40">{book.Item.itemPrice}円</h2>
                            </div>
                        </div>
                ))
            }
        </div >
    )
}

export default BookResults;