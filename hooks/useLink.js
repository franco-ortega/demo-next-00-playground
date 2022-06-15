import { useState, useEffect } from 'react';
import links from '../data/links'

export const useLink = () => {
  const currentLink = links[Math.floor(Math.random() * links.length)];
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => setActiveLink(currentLink), [currentLink]);

  return { activeLink };
};
