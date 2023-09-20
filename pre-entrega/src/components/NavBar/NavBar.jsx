import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <h1>
                    <Link to="/">Tu Shop</Link>
                </h1>

                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink to="/category/shirts" className="nav-link active" aria-current="page">Shirts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/coverall" className="nav-link active" aria-current="page">Coverall</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/jacket" className="nav-link active" aria-current="page">Jackets</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/set" className="nav-link active" aria-current="page">Set</NavLink>
                    </li>
                </ul>
                <div>
                        <NavLink to="/cart">
                            <CartWidget />
                        </NavLink>
                    </div>

            </div>
        </nav>
    )
}
export default NavBar;