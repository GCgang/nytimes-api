import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigators}>
          <li className={styles.link}>
            <Link prefetch href="/">
              Home
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
