import scss from "./Button.module.scss"
import PropTypes from 'prop-types';

export const Button = ({text, onClick}) => {
  return (
    <button 
    className={scss.Button}
    onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
  };