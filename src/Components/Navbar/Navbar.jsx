import { Menu, Search, ShoppingCart } from "react-feather";
import "./Navbar.css"
import "./Navslide.js"

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="navbar-logo">Coffee <span>Shop</span></a>
        <div className="navbar-nav">    
            <a href="#">Home</a>
            <a href="#about">Tentang Kami</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Kontak</a>
        </div>
        <div className="navbar-extra">
            <a href="#" id="search"><Search/></a>
            <a href="#" id="shoppingCard"><ShoppingCart/></a>
            <a href="#" id="hamburgerMenu"><Menu/></a>
            </div>
        </nav>
    );
}
export default Navbar;