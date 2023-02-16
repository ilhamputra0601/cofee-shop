import { Facebook, Instagram, Twitter } from "react-feather";
import "./Footer.css"

const Footer = () => {
    return ( 
        <footer>
        <div className="socials">
            <a href="">
                <Instagram/>
            </a>
            <a href="">
                <Twitter/>
            </a>
            <a href="">
                <Facebook/>
            </a>
            </div>
            <div className="links">
                <a href="#home">Home</a>
                <a href="#about">Tentang Kami</a>
                <a href="#menu">Menu</a>
                <a href="#contact">Kontak</a>
            </div>
            <div className="credit">
                <p>Created by <a href="https://github.com/ilhamputra0601">Ilham Ramadhan</a>. | &copy; 2023.</p>
            </div>
        </footer>
    );
}

export default Footer;