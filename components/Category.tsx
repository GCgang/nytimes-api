'use client';

import styles from '../styles/Category.module.css';
import { useRouter } from 'next/navigation';

interface ICategoryProps {
  name: string;
}
export default function Category({ name }: ICategoryProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/list/${name}`);
  };

  return (
    <div className={styles.category} onClick={handleClick}>
      <li>{name} →</li>
    </div>
  );
}
