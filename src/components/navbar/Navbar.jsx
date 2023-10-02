import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../auth-provider/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(UserAuth);
    // log out 
    const handleSignOut = () => {
        logOut()
        .then(() => alert(`User logged out`))
        .catch(error => console.error());
    }
    console.log(user)
    // useEffect(() => {
    //     console.log(`rendering`);
    // }, [user])

    return (
        <nav className="flex justify-between items-center py-3 px-6 shadow-xl">
            <h1 className="text-3xl font-bold">Explore auth</h1>
            <ul className="flex gap-6">
                <li>
                    <NavLink to={`/`} className={({isPending, isActive}) => {
                        isPending ? `pending` : isActive ? `active` : ``
                    }}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/products`} className={({isPending, isActive}) => {
                        isPending ? `pending` : isActive ? `active` : ``
                    }}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/login`} className={({isPending, isActive}) => {
                        isPending ? `pending` : isActive ? `active` : ``
                    }}>
                        Login
                    </NavLink>
                </li>
                
            </ul>
            {
                user?.email ?
                <section className="flex gap-6 justify-center items-center">
                    <p>Name: {user?.displayName}</p>
                    <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
                </section>
                :
                <Link to={`/login`}><button className="btn btn-primary">Login</button></Link>
            }
        </nav>
    );
};

export default Navbar;