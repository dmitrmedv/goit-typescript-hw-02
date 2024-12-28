import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import { Photo } from "../../types";

const ImageCard: React.FC<Pick<Photo, "urls" | "alt_description">> = ({
  urls: { small, regular },
  alt_description,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = (): void => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div>
        <img src={small} alt={alt_description} onClick={toggleModal} />
      </div>
      {showModal && (
        <ImageModal
          largeImageURL={regular}
          toggleModal={toggleModal}
          alt={alt_description}
        ></ImageModal>
      )}
    </>
  );
};

export default ImageCard;
