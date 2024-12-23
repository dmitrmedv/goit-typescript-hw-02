import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(({ id, urls: { small }, alt_description }) => {
        return (
          <li key={id} className={css.galleryItem}>
            <div className={css.imgWrapper}>
              <img src={small} alt={alt_description} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
