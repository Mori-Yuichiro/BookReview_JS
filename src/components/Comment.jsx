import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Comment = () => {
    const isbn = useLocation().pathname.substring(9, 22);
    const [comment, setComment] = useState('');
    const title = useLocation().state.title;

    useEffect(() => {
        axios.post(
            'http://127.0.0.1:3000/book/post',
            { title: title, isbn: isbn }
        ).then(() => {
            console.log('Book insert');
        })


    }, [])

    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }

    const handlePost = () => {
        axios.post(
            'http://127.0.0.1:3000/comment/post',
            { isbn: isbn, comment: comment }
        ).then(() => {
            console.log('Comment insert');
        })
        setComment('');
    }

    return (
        <div>
            <h1>コメント</h1>
            <div>
                <div>
                    <textarea className="outline" type="text" value={comment} placeholder="コメントを書いて下さい" onChange={handleChangeComment} />
                </div>
                <div>
                    <button className="outline" onClick={handlePost}>投稿</button>
                </div>
            </div>
            <Link to="/">戻る</Link>
        </div>
    )
}

export default Comment;