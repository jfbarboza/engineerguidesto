import Link from 'next/link';
import classes from './button.module.css';
import { useState, useEffect } from 'react';

function Button(props: any){
    const { color, hamburger } = props;
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const btnClasses = `
        ${classes.btn}
        ${color =='blue' ?  classes.blue : ''}`;
    const handleClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    let hamburgerClasses = `
        ${classes.hamburger}
        ${menuIsOpen ? classes.open : ''}`;
    // useEffect(() => {
    //     console.log(`menuIsOpen: ${menuIsOpen}`);
    //     setMenuIsOpen(isOpen);
    // }, [isOpen, menuIsOpen]);
    if(props.link){
        return(
            <Link href={props.link} className={btnClasses} >
                {props.children}
            </Link>
        )
    }
    if(props.hamburger){
        return(
            <button className={btnClasses} onClick={handleClick}><span className={ hamburgerClasses }></span></button>
        );
    }
    return(
        <button className={btnClasses} onClick={props.onClick}>{ props.children }</button>
    )
}

export default Button;