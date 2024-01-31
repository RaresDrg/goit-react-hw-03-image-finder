import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, handleModal }) => {
  const handleClick = ({ target }) => {
    const url = target.dataset.imageUrl;
    handleModal(url);
  };

  return (
    <li className={styles.ImageGalleryItem} onClick={handleClick}>
      <img
        src={image.webformatURL}
        className={styles['ImageGalleryItem-image']}
        data-image-url={image.largeImageURL}
        alt="your search"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
