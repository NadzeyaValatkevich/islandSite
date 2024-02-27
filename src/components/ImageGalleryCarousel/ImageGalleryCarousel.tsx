import ImageGallery from "react-image-gallery";

import { ImagesGallery } from "../../types";

import "./ImageGalleryCarousel.scss";

interface IProps {
  images: string[];
  thumbnailPosition?: string;
}

export const MyGallery = (props: IProps) => {

  function getImgSize(imgSrc: string) {
    let newImg = new Image();

    newImg.src = imgSrc;

    let height = newImg.height;
    let width = newImg.width;

    return (width - height)
  };

  const images: ImagesGallery[] = props.images.map((el) => {
    let dif = getImgSize(el);

    return {
      original: el,
      thumbnail: el,
      originalClass: dif >= 0 ? "coverOrigin" : "containOrigin",
      thumbnailClass: dif >= 0 ? "coverThumbnail" : "containThumbnail",
    };
  });
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      thumbnailPosition={props.thumbnailPosition ? "right" : "bottom"}
    />
  );
};
