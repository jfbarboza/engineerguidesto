import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './carousel-item';
import classes from './books-carousel.module.css';
import { Fragment } from 'react';

interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string
}
interface CustomRightArrowProps extends ArrowProps {
  myOwnStuff: string
}
const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
  return (
    <button 
      aria-label="Go to next slide"
      onClick={onClick} className={classes.left_arrow}>
      
    </button>
  )
}

const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
  return (
    <button 
      aria-label="Go to next slide"
      onClick={onClick} className={classes.right_arrow}>
      
    </button>
  )
}

function BooksCarousel( props: any){
    const { books } = props;
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
        <Fragment>
          <h2 className={classes.title}>Our Books</h2>
          <Carousel 
            responsive={responsive}
            draggable={false}
            infinite={true}
            itemClass={classes.carousel}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
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
        </Fragment>
      );
}

export default BooksCarousel;