import { Outlet, Link } from "react-router-dom";

const Root = () => {
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
        <Outlet />
        </>
    )
}

export default Root;