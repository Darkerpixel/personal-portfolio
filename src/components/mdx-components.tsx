import type { ImageProps, ImagesProps } from "../types";

const ImageRaw = ({ src, alt }: ImageProps) => {
  return <img src={src} alt={alt} />;
};

const ImageGrid = ({ images }: ImagesProps) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => {
        return <img src={image.src} alt={image.alt} key={index} />;
      })}
    </div>
  );
};

export { ImageRaw, ImageGrid };
