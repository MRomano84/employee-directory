import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    return (
        <nav className="navbar justify-content-center search-area">
            <h2 className="search-header">Search Employees</h2>
            <form className="form-inline m-4" onSubmit={props.handleFormSubmit}>
                <input
                    className="form-control-lg"
                    value={props.value}
                    name="search"
                    onChange={props.handleInputChange}
                    type="search"
                    placeholder="Search Employees Here"
                />
            </form>
        </nav>
    )
}

export default SearchBar;