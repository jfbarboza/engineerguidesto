import Link from 'next/link';
import classes from './button.module.css';
import { useEffect, useRef, useState } from 'react';

function Button(props: any){
    const { color, hamburger } = props;
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    useEffect(() => {
        if(props.isOpen){
            setMenuIsOpen(true);
        }else{
            setMenuIsOpen(false);
        }
    }, [props.isOpen]);

    const btnClasses = `
        ${classes.btn}
        ${color =='blue' ?  classes.blue : ''}
        ${menuIsOpen ? classes.open : ''}
        ${hamburger ? classes.hamburger : ''}`;


    if(props.link){
        return(
            <Link href={props.link} className={btnClasses} >
                {props.children}
            </Link>
        )
    }
    if(props.hamburger){
        return(
            <button className={btnClasses} onClick={props.handleMobileMenu}><span className={ classes.hamburger }></span></button>
        );
    }
    return(
        <button className={btnClasses} onClick={props.onClick}>{ props.children }</button>
    )
}

export default Button;