import useToggle from '../hooks/useToggle';

const Toggle = () => {
  const [value, toggle] = useToggle();

  return (
    <button className="toggleButton" onClick={() => toggle()}>
      {value}
    </button>
  );
};

export default Toggle;
