import Link from 'next/link';
import classes from './book-item.module.css';
import Button from '../../ui/button';

function BookItem(props: any) {
    const { 
        title,
        subtitle, 
        thumb,
        description,
        id } = props;

    return (
        <li className={classes.book}>
            <img src={'/' + thumb} alt={ title }/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{ description }</p>
                </div>
                <div className={classes.actions}>
                    <Button link="{ exploreLink }">Buy Now</Button>
                </div>
            </div>
        </li>
    )
}

export default BookItem;