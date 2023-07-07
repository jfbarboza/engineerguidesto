import BookItem from "../book-item/book-item";
import classes from './book-list.module.css';
function BookList(props: any){
    const { books } = props;
    return (
        <ul className={classes.list}>
            {books.map((book: any) => (
                <BookItem 
                    id={book.id} 
                    title={book.title}
                    subtitle={book.subtitle}
                    thumb={book.thumb}
                    description={book.description}
                    key={book.id}/>
            ))}
        </ul>
    )    
}

export default BookList;