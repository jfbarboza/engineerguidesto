import classes from './navigation.module.css';
import Link from 'next/link';
import NavigationItem from './navigationItem';
import { menu } from '../../../core/menu';

function TopNavigation(){
    return(
        <nav className={classes.navigation}>
            <ul>
                { menu.map(item => {return(
                    <NavigationItem key={item.label} link={item.link}>{item.label}</NavigationItem>
                    )})
                }
            </ul>
        </nav>
    )
}

export default TopNavigation;