import './education.css';

function Education() {
    return (
        <section className="education" id="education">

            <h1 className="heading"> my <span>education</span> </h1>

            <div className="box-container">

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2019</span>
                    <h3>Front-End Web Development</h3>
                    <p> courses in Angular and Javascript. Eurolink - ROMA (RM) ITALY</p>
                </div>

                <div className="box" >
                    <i className="fas fa-graduation-cap"></i>
                    <span>2018</span>
                    <h3>Java Developer course</h3>
                    <p>Object Oriented Programming. Eurolink - ROMA (RM) ITALY</p>

                </div>

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2018</span>
                    <h3>Physics degree</h3>
                    <p>Università degli Studi di CATANIA - Dipartimento di Fisica ed Astronomia</p>
                </div>

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2012</span>
                    <h3>Industral maintenance technician school</h3>
                    <p>IST. "G. FERRARIS" - RAGUSA (RG) ITALY</p>
                </div>
            </div>

        </section>
    );
}

export default Education;
