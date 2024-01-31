import PropTypes from 'prop-types';
import styles from './ErrorAlert.module.css';

const ErrorAlert = ({ error }) => {
  return <p className={styles.Error}>{error}</p>;
};

ErrorAlert.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorAlert;
