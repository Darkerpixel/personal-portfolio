import type { ImageProps, ImagesProps } from "../types";

const ImageRaw = ({ src, alt }: ImageProps) => {
  return <img className="img" src={src} alt={alt} />;
};

const ImageGrid = ({ images }: ImagesProps, index: number) => {
  return (
    <div className="image-grid">
      {images.map((image) => {
        return (
          <img className="img" src={image.src} alt={image.alt} key={index} />
        );
      })}
    </div>
  );
};

export { ImageRaw, ImageGrid };
