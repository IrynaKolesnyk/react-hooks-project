import { useCallback, useEffect, useRef, useState } from 'react';

export const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = useCallback(() => setHovered(true), []);
  const handleMouseOut = useCallback(() => setHovered(false), []);

  const handleMouseMove = event => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      handleMouseOut();
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);
    element.addEventListener('mousemove', handleMouseMove);
    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', handleMouseOut);
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { hovered, ref };
};
