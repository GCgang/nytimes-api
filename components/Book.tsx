import styles from '../styles/Book.module.css';
interface IBookProps {
  bookImage: string;
  title: string;
  author: string;
  amazonLink: string;
}
export default function Book({
  bookImage,
  title,
  author,
  amazonLink,
}: IBookProps) {
  return (
    <div className={styles.book}>
      <li>
        <img src={bookImage} alt={title} />
        <h2>{title}</h2>
        <p>{author}</p>
        <a href={amazonLink} target="_blank" rel="noopener noreferrer">
          Buy on Amazon
        </a>
      </li>
    </div>
  );
}
