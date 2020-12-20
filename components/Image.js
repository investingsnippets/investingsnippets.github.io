/* eslint-disable react/prop-types */
import "lazysizes";
// import {default as NextImage} from 'next/image';

export default function Image({ alt, src, previewSrc, className }) {
  return (
    <div className={`${className}`}>
      {/* <NextImage
        src={src}
        alt={alt}
        layout='fill'
      /> */}
      <img
        className="lazyload blur-up"
        alt={alt}
        src={previewSrc}
        data-srcset={src}
      />
    </div>
  );
}