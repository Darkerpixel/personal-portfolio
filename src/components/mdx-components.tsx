//mdx-components.tsx
import { useEffect, useRef, useState } from "react";
import type { ImageProps, ImagesProps, ReferenceProps } from "../types";

const ImageRaw = ({ src, alt }: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <>
      <button className="modal-image" onClick={() => setIsOpen(true)}>
        <img src={src} alt={alt} />
      </button>
      {isOpen && (
        <div className="modal-image-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-image-zoom" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt}/>
              <button className="modal-close-btn" onClick={() => setIsOpen(false)}>
              ✕
              </button>
          </div>
        </div>
      )}
    </>
  );
};

const ImageGrid = ({ images }: ImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="image-grid">
        {images.map((image, index) => (
          <button key={index} className="modal-image" onClick={() =>setSelectedImage(image.src)}
          >
            <img className="modal-image" src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
      {selectedImage && (
      <div className="modal-image-backdrop" onClick={() => setSelectedImage(null)}>
        <div className="modal-image-zoom" onClick={(e) => e.stopPropagation()}>
          <img src={selectedImage} alt="" />
            <button 
              className="modal-close-btn"
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
