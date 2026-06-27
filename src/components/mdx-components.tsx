import type { RawImageProps } from "../types";

const RawImage = ({ src, alt }: RawImageProps) => {
  return <img src={src} alt={alt} />;
};

export { RawImage };
