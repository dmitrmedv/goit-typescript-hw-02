import css from "./ImageModal.module.css";
import { createPortal } from "react-dom";
import React, { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

interface ImageModalProps {
  largeImageURL: string;
  toggleModal: () => void;
  alt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  largeImageURL,
  toggleModal,
  alt,
}) => {
  useEffect(() => {
    function escCloseModal(e: KeyboardEvent): void {
      if (e.code === "Escape") {
        toggleModal();
      }
    }
    window.addEventListener("keydown", escCloseModal);
    return () => window.removeEventListener("keydown", escCloseModal);
  }, [toggleModal]);

  const closeOnBackDrop = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={closeOnBackDrop}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};

export default ImageModal;
