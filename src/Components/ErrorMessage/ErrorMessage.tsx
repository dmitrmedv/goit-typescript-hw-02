import React from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.errorCard}>
      <p className={css.message}>Щось пішло не так, спробуйте ще раз...</p>
    </div>
  );
};

export default ErrorMessage;
