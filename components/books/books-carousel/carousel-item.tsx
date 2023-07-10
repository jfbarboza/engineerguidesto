import Link from 'next/link';
import classes from './carousel-item.module.css';
function CarouselItem(props: any){
    const { image, id, title, subtitle} = props;
    return(
        <div className={classes.carousel_item}>
            <Link href={`/books/${id}`}>
                <img src={image} alt={title + ': ' + subtitle } />
            </Link>
        </div>
    );
}

export default CarouselItem;