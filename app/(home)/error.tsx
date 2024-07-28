'use client';
import styles from '../../styles/NotFound.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Error</h1>
      <p className={styles.description}>
        죄송합니다. 페이지를 찾을 수 없습니다.
      </p>
      <p className={styles.description}>홈페이지로 이동해 주세요.</p>
      <Link className={styles.button} href={'/'}>
        Home
      </Link>
    </div>
  );
}
