import Link from 'next/link';
import classes from './button.module.css';
function Button(props: any){
    const { color } = props;
    const btnClasses = `${classes.btn} ${color =='blue' ?  classes.blue : ''}`;
    return(
        <Link href={props.link} className={btnClasses} >
            {props.children}
        </Link>
    )
}

export default Button;