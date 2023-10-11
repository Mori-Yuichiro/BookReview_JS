import React from "react";

const InputTitle = (props) => {
    const handleSearch = () => {
        props.handleSearch();
    }

    const handleChange = (e) => {
        props.handleChangeText(e.target.value);
    }

    return (
        <div>
            <input type="text" value={props.text} onChange={handleChange} />
            <button type="submit" onClick={handleSearch}>検索</button>
        </div>
    )
}

export default InputTitle;