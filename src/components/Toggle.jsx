import useToggle from '../hooks/useToggle';

const Toggle = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button className="toggleButton" onClick={() => toggle()}>
      {value}
    </button>
  );
};

export default Toggle;
