const Input = ({
  type,
  onChange,
  name,
  placeholder,
  validations,
  value,
  style,
}) => {
  return (
    <label>
      <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={{ ...style }}
        {...validations}
      />
    </label>
  );
};

export default Input;
