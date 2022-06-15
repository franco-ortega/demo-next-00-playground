import { useState, useEffect } from 'react';
import colors from '../data/colors';

export const useColor = () => {
  const currentColor = colors[Math.floor(Math.random() * colors.length)];

  const [activeColor, setActiveColor] = useState('');
  useEffect(() => setActiveColor(currentColor), [currentColor]);

  return { activeColor };
};
