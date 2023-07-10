import classes from './navigation.module.css';
import Link from 'next/link';

function TopNavigation(){
    return(
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href="/books">Books</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default TopNavigation;