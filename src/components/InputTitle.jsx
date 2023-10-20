import React from "react";
// import axios from "axios";

const InputTitle = (props) => {
    const handleSearch = () => {
        props.handleSearch();
    }

    const handleChange = (e) => {
        props.handleChangeText(e.target.value);
    }

    return (
        <div>
            <input className="outline mr-3 my-4" type="text" size="50" value={props.text} onChange={handleChange} />
            <button className="outline px-3 bg-slate-300" type="submit" onClick={handleSearch}>検索</button>
        </div>
    )
}

export default InputTitle;