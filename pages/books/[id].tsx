import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getBookById } from '@/dummy-data';
import EventSummary from '@/components/event-detail/event-summary';
import BookData from '@/components/books/book-detail/book-data';
import EventContent from '@/components/event-detail/event-content';

function BookPage(){
    const router = useRouter();
    const bookId = router.query.id;
    const book = getBookById(bookId);
    
    return (
        <Fragment>
            <EventSummary title={book?.title} />
            <BookData image={book?.cover} imageAlt={book?.title} />
            <EventContent> <p>{book?.description}</p> </EventContent>
        </Fragment>
    );
}

export default BookPage;