import { useRef } from 'react';

import Button from '@/components/ui/button';
import classes from './books-search.module.css';

function BooksSearch(props: any){
    const bookSelectRef = useRef<HTMLSelectElement>(null);
    const authorSelectRef = useRef<HTMLSelectElement>(null);
    function submitHandler(event: any){
        event.preventDefault();
        const selectedAuthor = authorSelectRef.current?.value;
        const enteredBook = bookSelectRef.current?.value;
        props.onSearch(selectedAuthor, enteredBook);
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="book">Book</label>
                    <select
                        placeholder="Search by book title" 
                        id="book"
                        ref={bookSelectRef}
                    >
                        <option value="all">All Books</option>
                        <option value="b1">The Engineer&apos;s Guide To: Weight Loss</option>
                        <option value="b2">The Engineer&apos;s Guide To: Grilling</option>
                        <option value="b3">The Engineer&apos;s Guide To: Body Building</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="author">Author</label>
                    <select 
                        name="author" 
                        id="author"
                        ref={authorSelectRef}
                    >
                        <option value="all">All Authors</option>
                        <option value="Jorge Barboza">Jorge Barboza</option>
                        <option value="Jesus Gonzalez">Jesus Gonzalez</option>
                    </select>
                </div>
            </div>
            <Button color="blue">Search</Button>
        </form>
    )
}

export default BooksSearch;