import "lazysizes";
import PropTypes from "prop-types";

export default function Image({ alt, src, previewSrc, className }) {
  return (
    <img
      className={`lazyload blur-up ${className}`}
      alt={alt}
      src={previewSrc}
      data-srcset={src}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  previewSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}
