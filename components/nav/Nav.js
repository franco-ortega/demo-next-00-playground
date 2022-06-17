import Link from 'next/link';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { useColor } from '../../hooks/useColor';
import { useEvent } from '../../hooks/useEvent';
import styles from './Nav.module.css';

const Nav = () => {
  const { activeEvent } = useEvent();
  const { activeColor } = useColor();

  return (
    <nav className={styles.Nav}>
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
          <Link href={`/${activeColor}`}>
            <a>{capitalizeFirstLetter(activeColor)}</a>
          </Link>
        </li>
        <li>
          <Link href={`/event/${activeEvent}`}>
            <a>{capitalizeFirstLetter(activeEvent)}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
