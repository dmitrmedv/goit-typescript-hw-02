import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import css from "./Searchbar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const setSearchQuery = (event): void => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event): void => {
    event.preventDefault();
    onSubmit(query);
    // event.target.reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          onChange={setSearchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}></span>
          <FaSearch size={25} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
