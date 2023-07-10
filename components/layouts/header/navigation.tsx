import classes from './navigation.module.css';
import Link from 'next/link';
import NavigationItem from './navigationItem';

function TopNavigation(){
    return(
        <nav className={classes.navigation}>
            <ul>
                <NavigationItem link="/">Home</NavigationItem>
                <NavigationItem link="/books">Books</NavigationItem>
            </ul>
        </nav>
    )
}

export default TopNavigation;