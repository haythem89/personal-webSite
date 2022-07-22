import './about.css';
import { NavLink} from 'react-router-dom'


function About() {
    return (
        <section className="about" id="about">
            <h1 className="heading"> <span>about</span> me </h1>
            <div className="row">
                {/* <div className="box-container">
                    <div className="box">
                        <h3>2+</h3>
                        <p>years of experience</p>
                    </div>
                    <div className="box">
                        <h3>450+</h3>
                        <p>satisfied clients</p>
                    </div>
                    <div className="box">
                        <h3>190+</h3>
                        <p>working hours</p>
                    </div>
                    <div className="box">
                        <h3>10+</h3>
                        <p>awards won</p>
                    </div>
                </div> */}

                <div className="content">
                    <h3>my name is <span>haytem ismail</span></h3>
                    <p>I am professional developer with more than 3 years of experience in Angular.</p>
                </div>

            </div>

            <div className="row">

                <div className="progress">

                    <h3> Angular <span>90%</span> </h3>
                    <div className="bar bar-1-1"><span></span></div>

                    <h3> React <span>60%</span> </h3>
                    <div className="bar bar-1-2"><span></span></div>

                    <h3> angularjs <span>50%</span> </h3>
                    <div className="bar bar-1-3"><span></span></div>

                    <h3> rxjs <span>70%</span> </h3>
                    <div className="bar bar-1-4"><span></span></div>

                    <h3> webpack <span>60%</span> </h3>
                    <div className="bar bar-1-5"><span></span></div>

                </div>

                <div className="progress">

                    <h3> HTML <span>80%</span> </h3>
                    <div className="bar bar-2-1"><span></span></div>

                    <h3> CSS <span>65%</span> </h3>
                    <div className="bar bar-2-2"><span></span></div>

                    <h3> javascript <span>70%</span> </h3>
                    <div className="bar bar-2-3"><span></span></div>

                    <h3> typrscripte <span>90%</span> </h3>
                    <div className="bar bar-2-4"><span></span></div>

                    <h3> bootstrap <span>65%</span> </h3>
                    <div className="bar bar-2-5"><span></span></div>

                </div>

            </div>

            <NavLink to="/contact" className="btn">
                contact me
            </NavLink>



        </section>
    );
}

export default About;
