import Link from "next/link";
import Button from "@/components/ui/button";
import classes from "./header.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import TopNavigation from "./navigation";

function Header(){
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
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
                    onClick={handleMobileMenu}
                    isOpen={mobileMenuOpen}
                ></Button>
            </div>
            <div className={classes.actions}>
                <Button link="https://www.amazon.com">Buy our Books</Button>
            </div>
        </header>
    );
}

export default Header;