const Button = ({ text, type, onClick, style }) => {
  return (
    <button type={type} onClick={onClick} style={{ ...style }}>
      {text}
    </button>
  );
};

export default Button;
