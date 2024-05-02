import { useRef, useState } from 'react';
import Input from './Input';

const defaultInputValues = {
  name: '',
  nickname: '',
  email: '',
  password: '',
  gender: '',
};

const Signup = () => {
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
    formRef.current.reset();
    handleReset();
  };

  const handleReset = () => {
    setInputValues(defaultInputValues);
  };

  const onGenderChange = event => {
    setInputValues(prevState => ({
      ...prevState,
      gender: event.target.value,
    }));
  };

  return (
    <div className="inputWrapper">
      <h1>Welcome</h1>
      <form
        ref={formRef}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="form"
      >
        <Input
          type="name"
          name="name"
          id="name"
          placeholder="name"
          required
          labelText="Name"
        />
        <Input
          type="nickname"
          name="nickname"
          id="nickname"
          labelText="Nickname"
          placeholder="nickname"
          required
          withIcon
        />
        <Input
          type="email"
          name="email"
          id="email"
          labelText="Email"
          placeholder="email"
          required
        />
        <div className="radioButtonsWrapper">
          <Input
            type="radio"
            name="gender"
            id="male"
            value="male"
            required
            checked={
              inputValues.gender === 'male'
            }
            onChange={onGenderChange}
            labelText="Male"
          />
          <Input
            type="radio"
            id="female"
            labelText="Female"
            name="gender"
            value="Female"
            required
            checked={
              inputValues.gender === 'female'
            }
            onChange={onGenderChange}
          />
        </div>
        <Input
          type="password"
          name="password"
          id="password"
          labelText="Password"
          placeholder="password"
          required
        />
        <Input
          type="password"
          name="passwordAgain"
          id="passwordAgain"
          labelText="PasswordAgain"
          placeholder="password again"
          required
        />
        <button
          className="submitBtn"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signup;
