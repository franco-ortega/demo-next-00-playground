import { useState, useEffect } from 'react';

export const useColor = () => {
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Pink', 'Brown'];
  const currentColor = colors[Math.floor(Math.random() * colors.length)];

  const [activeColor, setActiveColor] = useState('');
  useEffect(() => setActiveColor(currentColor), [currentColor]);

  return { activeColor };
};
