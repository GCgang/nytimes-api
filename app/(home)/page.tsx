import BestSellerLists from '../../components/BestSellerLists';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <BestSellerLists />
    </div>
  );
}
