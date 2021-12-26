import { MouseEventHandler, MouseEvent } from "react";
// useLocation can only be used if the component is inside react-router-dom's Router component
//import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// Stylesheet
import styles from "./Layout.module.css";


function Layout() {

    //const location = useLocation();
    //const navigate = useNavigate();

    // If we are in the homepage no need to show the logout button
    // const layoutStyle = { 
    //     display: location.pathname === "/" ? "none" : "flex" 
    // };



    // 
    const logout: MouseEventHandler<HTMLButtonElement> = (ev: MouseEvent<HTMLButtonElement>): void => {

        console.log(ev.target);

        return console.log("hello");

        // localStorage.removeItem("user");
        // navigate("/");
    }


   

    return (
        <div className={styles.layout} >
            <Link
                className = {styles.dashboard_route} 
                to="/dashboard"
            >
                Rafez's Blogs
            </Link>
            <div className={styles.routes_logout}>
                <Link className={styles.routes} to="/blogs">Blogs</Link>
                <Link className={styles.routes} to="/create-blog">Create Blog</Link>
                <button className={styles.logout_button} onClick={logout}>Logout</button>
            </div>
        </div>
    );

}

export default Layout;