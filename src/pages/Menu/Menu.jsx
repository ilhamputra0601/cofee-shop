import Card from '../../Components/Card/Card';
import './Menu.css'

const Menu = () => {
    const card = [
        { name:'Espresso', source:'https://source.unsplash.com/300x300?espresso', price:'15'},
        { name:'Late', source:'https://source.unsplash.com/300x300?late', price:'18'},
        { name:'Americano', source:'https://source.unsplash.com/300x300?americano', price:'20'},
        { name:'Cold Brew', source:'https://source.unsplash.com/300x300?coldbrew', price:'23'},
        { name:'Gayo Aceh', source:'https://source.unsplash.com/300x300?gayo', price:'25'}
    ]

    return (
        <section className="menu" id="menu">
            <h2><span>Menu</span> Kami</h2>
            <p>Kami Menyediakan Menu Dari Berbagai Daerah</p>
            <div className="row">
                <Card Cards={card} />
            </div>
        </section>
    );
}
export default Menu;