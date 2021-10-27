import s from "./SearchBar.module.css";
import { useState } from "react";

export function SearchBar({ getSearchValues }) {
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(12);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "searchValue":
        setSearchValue(value);
        break;
      case "perPage":
        setPerPage(value);
        break;
      default:
    }
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("BEFORE FETCH", searchValue, perPage);
    getSearchValues({ searchValue, perPage });
    setSearchValue("");
    // setPerPage(12);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSearchSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          type="text"
          name="searchValue"
          value={searchValue}
          onChange={handleSearchChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
