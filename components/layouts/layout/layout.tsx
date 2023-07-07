import Header from "../header/header";
import { Fragment } from "react";

function Layout(props: any){
    return (
        <Fragment>
            <Header />
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;