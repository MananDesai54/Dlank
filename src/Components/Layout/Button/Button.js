import "./Button.css";
import "materialize-css/js/waves";

const Button = ({ text, type, onClick, style, className }) => {
  return (
    <button
      className={"btn waves-effect waves-light " + className}
      type={type}
      onClick={onClick}
      style={{ ...style }}
    >
      {text}
    </button>
  );
};

export default Button;
