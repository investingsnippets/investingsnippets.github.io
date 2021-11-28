/* eslint-disable react/prop-types */
import "lazysizes";
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import {default as NextImage} from 'next/image';

export default function Image({ alt, src, previewSrc, className, lazyload = true}) {
  return (
    <div className={`${className}`}>
      {/* <NextImage
        src={src}
        alt={alt}
        layout='fill'
      /> */}
      {lazyload ?
        (
          <img
            className="lazyload blur-up"
            data-sizes="auto"
            alt={alt}
            src={previewSrc}
            data-srcset={src}
          />
        ):(
          <img
            className="blur-none w-auto h-40"
            alt={alt}
            src={src}
          />
        )}
    </div>
  );
}