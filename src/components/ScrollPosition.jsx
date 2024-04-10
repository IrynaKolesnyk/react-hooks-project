import useWindowScroll from "../hooks/useWindowScroll";

const ScrollPosition = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className="scrollPositionContainer">
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
};

export default ScrollPosition;