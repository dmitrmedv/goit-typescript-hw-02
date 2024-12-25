import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import css from "./Searchbar.module.css";
import toast from "react-hot-toast";
import { Loader } from "../Loader/Loader";

const SearchBar = ({ onSubmit, loading }) => {
  const [query, setQuery] = useState<string>("");

  const setSearchQuery = (event): void => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event): void => {
    event.preventDefault();
    if (!query) {
      toast.error(`заповніть поле пошуку...`);
      return;
    }
    onSubmit(query);
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
          {loading ? <Loader /> : <FaSearch size={25} />}
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
