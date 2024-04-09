import { useViewportSize } from "../hooks/useViewportSize";

const ViewportSize = () => {
  const { height, width } = useViewportSize();

  return (
    <div className="viewportSizeContainer">
      Width: {width}, height: {height}
    </div>
  );
};

export default ViewportSize;
