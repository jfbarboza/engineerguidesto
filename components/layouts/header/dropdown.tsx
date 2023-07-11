import NavigationItem from "./navigationItem";
import { useEffect, useRef, useState } from "react";
import classes from "./dropdown.module.css";
import { menu } from "../../../core/menu"

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
            { menu.map(item => {return(
                <NavigationItem key={item.label} link={item.link}>{item.label}</NavigationItem>
                )})
            }
        </div>
    )
}

export default Dropdown;