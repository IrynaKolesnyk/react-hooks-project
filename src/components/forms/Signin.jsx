import { useRef, useState } from 'react';
import Input from './Input';

const defaultInputValues = {
  email: '',
  password: '',
};

const Signin = ({ onSubmit }) => {
  const [inputValues, setInputValues] = useState(
    defaultInputValues,
  );

  const formRef = useRef(null);

  const handleChange = event => {
    setInputValues(prevState => ({
      ...prevState,
      [event?.target?.name]: event?.target?.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValues);
    formRef.current.reset();
    handleReset();
  };

  const handleReset = () => {
    setInputValues(defaultInputValues);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <form
        ref={formRef}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="form"
      >
        <Input
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Signin;
