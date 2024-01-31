import Proptypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, handleLoadMore }) => {
  return (
    <div className={styles['button-wrapper']}>
      <button className={styles.Button} onClick={handleLoadMore} type="button">
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: Proptypes.node.isRequired,
  handleLoadMore: Proptypes.func.isRequired,
};

export default Button;
