import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            
            <h1>
                <Link to="/">Tu Shop</Link>
            </h1>
            
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink to="/category/shirts" className="nav-link active" aria-current="page">Remeras</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/category/coverall" className="nav-link active" aria-current="page">Buzos</NavLink>
                </li>
                <li>
                    <NavLink to="/category/jacket" className="nav-link active" aria-current="page">Camperas</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/category/set" className="nav-link active" aria-current="page">Conjuntos</NavLink>
                </li>
            </ul>

            <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar;