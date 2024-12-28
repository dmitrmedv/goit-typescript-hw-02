import React, { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import css from "./ImageGallery.module.css";
import { ImageSearchResponse } from "../../types";

const ImageGallery: React.FC<Pick<ImageSearchResponse, "results">> = ({
  results,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = (): void => {
    setShowModal((prev) => !prev);
  };

  return (
    <ul className={css.gallery}>
      {results.map(({ id, urls: { small, regular }, alt_description }) => {
        return (
          <li key={id} className={css.galleryItem}>
            <div className={css.imgWrapper}>
              <img src={small} alt={alt_description} onClick={toggleModal} />
            </div>
            {showModal && (
              <ImageModal
                largeImageURL={regular}
                toggleModal={toggleModal}
                alt={alt_description}
              ></ImageModal>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
