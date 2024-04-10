import { useEffect, useState } from "react";

const useWindowScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollTo = ({ y }) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scroll, scrollTo];
};

export default useWindowScroll;
