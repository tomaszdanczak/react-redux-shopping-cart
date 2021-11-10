import PropTypes from "prop-types";

export default function Button({ onClick, customStyle, text, type }) {
  return (
    <button type={type} onClick={onClick} className={customStyle}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  customStyle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: "button",
};
