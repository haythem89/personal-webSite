import './contact.css';

function Contact() {
    return (
        <section className="contact" id="contact">

        <h1 className="heading"> <span>contact</span> me </h1>
    
        <form action="">
            <input type="text" placeholder="your name" className="box" />
            <input type="email" placeholder="your email" className="box"/>
            <input type="text" placeholder="subject" className="box"/>
            <textarea name="" className="box" placeholder="your message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn"/>
        </form>
    
    </section>
    );
}

export default Contact;
