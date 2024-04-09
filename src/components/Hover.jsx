import { useHover } from "../hooks/useHover";

const Hover = () => {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered
        ? "Mouse hovered over the element"
        : "Hover over the element with the mouse"}
    </div>
  );
};

export default Hover;
