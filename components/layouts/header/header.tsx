import Link from "next/link";
import Button from "@/components/ui/button";
import classes from "./header.module.css";
import { useState } from "react";
import TopNavigation from "./navigation";
import Dropdown from "./dropdown";

function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if(mobileMenuOpen){
            document.body.style.overflow = 'unset';
        }else{
            document.body.style.overflow = 'hidden';
        }
    }


    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">
                    The Engineer&apos;s Guide to
                </Link>
            </div>
            <TopNavigation />
            <div className={classes.mobile}>
                <Button 
                    hamburger="true" 
                    handleMobileMenu={handleMobileMenu}
                    isOpen={mobileMenuOpen}
                ></Button>
                <Dropdown isOpen={mobileMenuOpen} handleMobileMenu={handleMobileMenu} />
            </div>
            <div className={classes.actions}>
                <Button link="https://www.amazon.com">Buy our Books</Button>
            </div>
        </header>
    );
}

export default Header;