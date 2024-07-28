import CategoryBooks from '../../../../components/CategoryBooks';

interface IParams {
  params: { category: string };
}

export const metadata = {
  title: 'BookLists',
};

export default async function BookLists({ params: { category } }: IParams) {
  return (
    <div>
      <h1>{decodeURIComponent(category)}</h1>
      <CategoryBooks category={category} />
    </div>
  );
}
