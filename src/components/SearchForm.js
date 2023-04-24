import React from "react";
import PropTypes from "prop-types";
import { HiSearch } from "react-icons/hi";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input className="search-input" type="text" placeholder="Enter city" onChange={handleInputChange} value={searchText} />
      <button className="search__button" type="submit" onClick={onSubmit}>
        <HiSearch />
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
