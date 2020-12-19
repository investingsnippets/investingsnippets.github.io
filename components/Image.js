/* eslint-disable react/prop-types */
import "lazysizes";

export default function Image({ alt, src, previewSrc, className }) {
  return (
    <div className={`${className}`}>
      <img
        className={`lazyload blur-up`}
        alt={alt}
        src={previewSrc}
        data-srcset={src}
      />
    </div>
  );
}