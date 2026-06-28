import { useEffect, useRef, useState } from "react";
import type { ImageProps, ImagesProps, ReferenceProps } from "../types";

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
    <span ref={wrapperRef}>
      <button onClick={() => setIsOpen((toggle) => !toggle)}>
        {reference}
      </button>
      {isOpen && <span>{referenceText}</span>}
    </span>
  );
};

export { ImageRaw, ImageGrid, Term };
