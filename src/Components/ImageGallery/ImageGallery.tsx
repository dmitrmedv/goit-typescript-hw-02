import React from "react";
import css from "./ImageGallery.module.css";
import { ImageSearchResponse } from "../../types";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery: React.FC<Pick<ImageSearchResponse, "results">> = ({
  results,
}) => {
  return (
    <ul className={css.gallery}>
      {results.map(({ id, urls, alt_description }) => {
        return (
          <li key={id} className={css.galleryItem}>
            <ImageCard urls={urls} alt_description={alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
