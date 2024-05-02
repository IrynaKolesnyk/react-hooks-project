const Input = ({
  type,
  name,
  placeholder = '',
  required,
  id = '',
  value = '',
  onChange,
  checked,
  labelText = '',
  withIcon,
}) => {
  return (
    <>
      <label className="commonLabel" htmlFor={id}>
        {labelText}
      </label>
      <div
        className={
          withIcon
            ? 'formInput inputWithIcon'
            : 'formInput'
        }
      >
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          id={id}
          {...(value ? { value } : {})}
          onChange={onChange}
          checked={checked}
          className="input"
        />
      </div>
    </>
  );
};

export default Input;
