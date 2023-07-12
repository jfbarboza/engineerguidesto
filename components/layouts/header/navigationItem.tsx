import Link from 'next/link';
import classes from './navigationItem.module.css';

function NavigationItem(props: any){
    const { link, handleMobileMenu } = props;
    function handleClick(){
        handleMobileMenu();
    }
    return(
        <li className={classes.nav_item}
         onClick={handleClick}>
            <Link href={link}>{ props.children }</Link>
        </li>
    );
}

export default NavigationItem;