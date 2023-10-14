import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Comment = () => {
    const [comment, setComment] = useState('');
    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }

    return (
        <div>
            <h1>コメント</h1>
            <div>
                <div>
                    <textarea className="outline" type="text" value={comment} placeholder="コメントを書いて下さい" onChange={handleChangeComment} />
                </div>
                <div>
                    <button className="outline">投稿</button>
                </div>
            </div>
            <Link to="/">戻る</Link>
        </div>
    )
}

export default Comment;