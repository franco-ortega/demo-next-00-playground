import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
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
      </ul>
    </nav>
  );
};

export default Nav;
