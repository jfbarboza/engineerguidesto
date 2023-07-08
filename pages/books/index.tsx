import BookList from "@/components/books/book-list/book-list";
import { getAllBooks } from "@/dummy-data";
import BooksSearch from "@/components/books/books-search/books-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const books = getAllBooks();
    const router = useRouter();
    function findBooksHandler(selectedAuthor: string, enteredBook: string){
      const fullPath = `/books/${enteredBook}`;
      router.push(fullPath);
    }
    return (
      <Fragment>
        <h1>Our Books</h1>
        <BooksSearch onSearch={findBooksHandler}/>
        <BookList books={books} />
      </Fragment>
    )
  }
  