import './About.css'
const About = () => {
    return ( 
        <section id="about" className="about">
            <h2><span>Tentang </span>Kami</h2>
            <div className='row'>
                <div className="about-img">
                    <img src="https://source.unsplash.com/600x400?coffee" alt="Tentang Kami" />
                </div>
                <div className="content">
                    <h3>Kenapa Memilih Kopi Kami</h3>
                    <p>Karena Kopi Kita Mengandung Luwak</p>
                    <p>Dan Haraganya Mahal</p>
                </div>
            </div>
        </section>
    );
}
export default About;