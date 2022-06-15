import { useState, useEffect } from 'react';

export const useLink = () => {
  const links = ['One', 'Two', 'Three'];
  const currentLink = links[Math.floor(Math.random() * links.length)];
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => setActiveLink(currentLink), [currentLink]);

  return { activeLink };
};
