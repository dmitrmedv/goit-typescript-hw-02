import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ loadMore }) => {
  return (
    <button type="button" className={css.button} onClick={loadMore}>
      Load more
    </button>
  );
};
