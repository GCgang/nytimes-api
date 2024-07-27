import Book from './Book';

interface ICategoryBooksProps {
  category: string;
}
const API_URL = process.env.NEXT_PUBLIC_CATEGORY_BOOKS_URL;

async function getBooksByCategory(category: string) {
  const response = await fetch(`${API_URL}/${category}`);
  const json = await response.json();
  return json.results.books;
}

export default async function CategoryBooks({ category }: ICategoryBooksProps) {
  const books = await getBooksByCategory(category);

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.primary_isbn13}
          bookImage={book.book_image}
          title={book.title}
          author={book.author}
          amazonLink={book.amazon_product_url}
        />
      ))}
    </ul>
  );
}
