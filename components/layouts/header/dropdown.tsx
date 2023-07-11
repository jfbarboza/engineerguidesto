import NavigationItem from "./navigationItem";
import { useEffect, useRef, useState } from "react";
import classes from "./dropdown.module.css";

function Dropdown( props: any ){
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    useEffect(() => {
        if(props.isOpen){
            setMenuIsOpen(true);
        }else{
            setMenuIsOpen(false);
        }
    }, [props.isOpen]);

    const dropdownClasses = `
        ${classes.dropdown}
        ${props.isOpen ?  classes.open : ''}`;

    return(
        <div className={dropdownClasses}>
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/books">Books</NavigationItem>
        </div>
    )
}

export default Dropdown;