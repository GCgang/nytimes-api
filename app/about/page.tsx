import styles from '../../styles/Aboutus.module.css';
export const metadata = {
  title: 'About us',
};

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About us</h1>
      <p className={styles.description}>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
      </p>
      <p className={styles.description}>We hope you enjoy your stay!</p>
    </div>
  );
}
