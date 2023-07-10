import Link from 'next/link';
import classes from './navigationItem.module.css';

function NavigationItem(props: any){
    const { link } = props;
    return(
        <li className={classes.nav_item}>
            <Link href={link}>{ props.children }</Link>
        </li>
    );
}

export default NavigationItem;