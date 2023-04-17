import React from "react";
import PropTypes from "prop-types";
import { SlMagnifier } from "react-icons/sl";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input className="search-input" type="text" onChange={handleInputChange} value={searchText} />
      <button className="search__button" type="submit" onClick={onSubmit}>
        <SlMagnifier />
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
