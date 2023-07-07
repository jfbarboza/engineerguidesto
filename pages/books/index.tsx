import BookList from "@/components/books/book-list/book-list";
import { getAllBooks } from "@/dummy-data"

export default function Home() {
    const books = getAllBooks();
    return (
      <>
        <h1>Our Books</h1>
        <BookList books={books} />
      </>
    )
  }
  