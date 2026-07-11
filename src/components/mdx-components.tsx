//mdx-components.tsx
import { useEffect, useRef, useState } from "react";
import type { ImageProps, ImagesProps, ReferenceProps } from "../types";

const ImageRaw = ({ src, alt }: ImageProps) => {
  return <img src={src} alt={alt} />;
};

const ImageGrid = ({ images }: ImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

  return (
    <>
      <div className="images-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className="thumbnail-image"
            loading="lazy"
          />
        ))}
      </div>
      {selectedImage && (
        <div className="image-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="zoom-image" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Term = ({ reference, referenceText }: ReferenceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        wrapperRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <span className="modal-term" ref={wrapperRef}>
      <button onClick={() => setIsOpen((toggle) => !toggle)}>
        {reference}
      </button>
      {isOpen && <span className="modal-term-definition">{referenceText}</span>}
    </span>
  );
};

export { ImageRaw, ImageGrid, Term };
