import Footer from "../Components/Footers/Footer";
import Navbar from "../Components/Navbar/Navbar"
import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Menu from "./Menu/Menu";

const Main = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Contact />
        <Footer />    
        </>
    );
}
export default Main;
