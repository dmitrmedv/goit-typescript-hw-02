import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  loadMore: () => void;
}

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <button type="button" className={css.button} onClick={loadMore}>
      Load more
    </button>
  );
};
