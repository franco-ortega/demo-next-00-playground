import Link from 'next/link';
import { useColor } from '../../hooks/useColor';
import { useLink } from '../../hooks/useLink';
import styles from './Nav.module.css';

const Nav = () => {
  const { activeLink } = useLink();
  const { activeColor } = useColor();

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
