import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './carousel-item';
import classes from './books-carousel.module.css';
function BooksCarousel( props: any){
    const { books } = props;
    console.log(`books: ${books}`);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <Carousel 
          responsive={responsive}
          draggable={false}
          showDots={true}
          infinite={true}
          itemClass={classes.carousel}
          >
            { books.map((book: any) => (
                <CarouselItem
                    image={book.cover}
                    id={book.id}
                    title={book.title}
                    subtitle={book.subtitle}
                    key={book.id}/>
            ))}
        </Carousel>
      );
}

export default BooksCarousel;