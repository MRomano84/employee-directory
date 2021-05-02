import React from "react";

const SearchBar = (props) => {
    return (
        <nav className="navbar justify-content-center">
            <h4>Search Employees</h4>
            <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
                <input
                    className="form-control"
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