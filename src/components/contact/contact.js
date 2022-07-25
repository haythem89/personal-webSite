import { Component } from 'react';
import './contact.css';

class Contact extends Component {

    state = {
        from_name: '',

        to_name: '',
        message: ''
    }

    inviaMessage = () => {
        console.log("richiesta invio email");
        window['inviaMail'](this.state);
    }

    changeName = (e) => {
        this.setState({
            to_name: e.target.value
        })
    }

    changeEmail = (e) => {
        this.setState({
            from_name: e.target.value
        })
    }
    changeMsg = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <section className="contact" id="contact">
                <h1 className="heading"> <span>contact</span> me </h1>
                <form action="">
                    <input type="text" placeholder="your name" onChange={this.changeName} className="box" />
                    <input type="email" placeholder="your email" onChange={this.changeEmail} className="box" />
                    {/* <input type="text" placeholder="subject" className="box" /> */}
                    <textarea name="" className="box" placeholder="your message" id="" cols="30" rows="10" onChange={this.changeMsg}></textarea>
                </form>
                <input type="submit" value="send message" className="btn" onClick={this.inviaMessage} />
            </section>
        );
    }
}

export default Contact;
