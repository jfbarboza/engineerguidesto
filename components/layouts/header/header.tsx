import Link from "next/link";
import Button from "@/components/ui/button";
import classes from "./header.module.css";
import { useRouter } from "next/router";

function Header(){
    const router = useRouter();
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">
                    The Engineer&apos;s Guide to
                </Link>
            </div>
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
            <div className={classes.actions}>
                <Button link="https://www.amazon.com">Buy our Books</Button>
            </div>
        </header>
    );
}

export default Header;