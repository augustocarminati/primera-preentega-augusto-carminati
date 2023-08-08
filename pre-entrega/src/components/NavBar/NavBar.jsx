import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            
            <a href="#" className="navbar-brand">TuShop</a>
            
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">Remeras</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">Buzos</a>
                </li>
                <li>
                    <a href="#">Camperas</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">Conjuntos</a>
                </li>
            </ul>

            <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar;