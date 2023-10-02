import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        </nav>
    );
};

export default Navbar;