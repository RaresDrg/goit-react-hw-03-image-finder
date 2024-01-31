import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, handleModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(item => (
        <ImageGalleryItem
          key={item.id}
          image={item}
          handleModal={handleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
