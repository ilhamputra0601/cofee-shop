import Card from '../../Components/Card/Card';
import './Menu.css'
import menu from './menu.json';
const Menu = () => {
    return (
        <section className="menu" id="menu">
            <h2><span>Menu</span> Kami</h2>
            <p>Kami Menyediakan Menu Dari Berbagai Daerah</p>
            <div className="row">
                <Card Cards={menu} />
            </div>
        </section>
    );
}
export default Menu;