import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  const links = ['One', 'Two', 'Three'];
  const currentLink = links[Math.floor(Math.random() * links.length)];
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => setActiveLink(currentLink), [currentLink]);

  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Pink', 'Brown'];
  const currentColor = colors[Math.floor(Math.random() * colors.length)];

  const [activeColor, setActiveColor] = useState('');
  useEffect(() => setActiveColor(currentColor), [currentColor]);

  return (
    <nav className={styles.Nav}>
      <h2>Nav Bar</h2>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/stuff">
            <a>Stuff</a>
          </Link>
        </li>
        <li>
          <Link href={`/event/${activeLink.toLowerCase()}`}>
            <a>{activeLink}</a>
          </Link>
        </li>
        <li>
          <Link href={`/${activeColor.toLowerCase()}`}>
            <a>{activeColor}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
