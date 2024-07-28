import styles from '../../styles/Home.module.css';
import BestSellerLists from '../../components/BestSellerLists';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <BestSellerLists />
    </div>
  );
}
