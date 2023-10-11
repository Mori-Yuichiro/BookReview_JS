import React from "react";
import { useState } from "react";

const InputTitle = () => {
    const [text, setText] = useState('');
    return (
        <div>
            <form action="" method="GET">
                <input type="text" value={text} />
                <button type="submit">検索</button>
            </form>
        </div>
    )
}

export default InputTitle;