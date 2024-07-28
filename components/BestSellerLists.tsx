import styles from '../styles/BestSellerLists.module.css';
import Category from './Category';
const API_URL = process.env.NEXT_PUBLIC_BEST_SELLER_LISTS_URL;

async function getBestSellerLists() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.results;
}

export default async function BestSellerLists() {
  const bestSellerLists = await getBestSellerLists();

  return (
    <ul className={styles.bestSellerLists}>
      {bestSellerLists.map((category) => (
        <Category key={category.list_name_encoded} name={category.list_name} />
      ))}
    </ul>
  );
}
