import { Mail, Phone, User } from "react-feather";
import './Contact.css'

const Contact = () => {
    return ( 
        <section id="contact" className="contact">
            <h2><span>Kontak</span> Kami</h2>
            <p>Silahkan hubungi kami untuk memesan</p>
            <div className="row">
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1178.8289550256025!2d106.82657067576052!3d-6.382103855811993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebf860e96983%3A0x335e535b40118894!2sMasjid%20Jami&#39;%20Al-Akhyar!5e0!3m2!1sid!2sid!4v1676503118230!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <form action="">
                    <div className="input-group">
                        <User/>
                        <input type="text" name="name" id="name" placeholder="nama" required/>
                    </div>
                    <div className="input-group">
                        <Mail/>
                        <input type="email" name="email" id="email" placeholder="email" required/>
                    </div>
                    <div className="input-group">
                        <Phone/>
                        <input type="number" name="phone" id="phone" placeholder="phone" required/>
                    </div>
                    <button type="submit" className="btn">kirim pesan</button>
                </form>
            </div>
        </section>
    );
}
export default Contact;