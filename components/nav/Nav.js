import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  const links = ['One', 'Two', 'Three'];
  const currentLink = links[Math.floor(Math.random() * links.length)];
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => setActiveLink(currentLink), [currentLink]);

  return (
    <nav className={styles.Nav}>
      <h2>Nav Bar</h2>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/stuff'>
            <a>Stuff</a>
          </Link>
        </li>
        <li>
          <Link href={`/event/${activeLink.toLowerCase()}`}>
            <a>{activeLink}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
