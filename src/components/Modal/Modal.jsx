import PropTypes from 'prop-types';

const Modal = ({ url, closeModal }) => {
  const handleCloseModal = ({ target }) => {
    target.className === 'Overlay' && closeModal();
  };

  return (
    <div className="Overlay" onClick={handleCloseModal}>
      <div className="Modal">
        <img src={url} alt="your search" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
