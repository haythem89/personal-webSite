import jsPDF from 'jspdf';
import './home.css';
import cv1 from './CV-part-1.png'
import cv2 from './CV-part-2.png'
import { Component } from 'react';

class Home extends Component {

    generatePDF = () => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(cv1, 'PNG', 50, 10, 515, 430, '', 'SLOW');
        doc.addPage();
        doc.addImage(cv2, 'PNG', 50, 10, 515, 430, '', 'SLOW');
        doc.save("cv-Haytem-Ismail");
    }

    render() {
        return (
            <section className="home" id="home">

                <div className="content">
                    <h3>Haytem ismail</h3>
                    <p>i am a front-end developer</p>
                    <button className="btn" onClick={this.generatePDF}>download CV</button>
                </div>

                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-pinterest"></a>
                </div>
            </section>
        );
    }
}

export default Home;
