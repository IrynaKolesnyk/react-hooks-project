import { useEffect, useState } from 'react';

const useWindowScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollTo = ({ x, y }) => {
    if (typeof window === 'undefined') return;
    window.scrollTo({
      top: y,
      left: x,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scroll, scrollTo];
};

export default useWindowScroll;
