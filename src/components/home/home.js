import './home.css';

function Home() {
    return (
        <section className="home" id="home">

            <div className="content">
                <h3>Haytem ismail</h3>
                <p>i am a front-end developer</p>
                <a href="#" className="btn">download CV</a>
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

export default Home;
