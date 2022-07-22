import './portfolio.css';
import imageMef from './image/mef.jpg';
import poliziaStato from './image/ministero_interno_polizia_criminale.jpg';
import sogei from './image/logo-sogei.jpg';


function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">

            <h1 className="heading"> my <span>portfolio</span> </h1>

            <div className="box-container">
                <div className="box">
                    <img src={sogei} alt="" />
                    <div className="content">
                        <h3>Portale ALM</h3>
                        <ul className='text-left'>
                            <li>portal-mf-portal (bug fix)</li>
                            <li>portal-mf-team (bug fix)</li>
                            <li>portal-mf-repository (bug fix)</li>
                        </ul>
                    </div>
                </div>
                <div className="box">
                    <img src={imageMef} alt="" />
                    <div className="content">
                        <h3>Portale Dag</h3>
                        <ul className='text-left'>
                            <li>le mie pratiche-web</li>
                            <li>costituzione deposito-web</li>
                            <li>consultazione pagamenti-web</li>
                            <li>restituzione depositi-web</li>
                            <li>i miei dati-web</li>
                            <li>le mie deleghe</li>

                        </ul>
                    </div>

                    <div >

                    </div>
                </div>

                <div className="box">
                    <img src={poliziaStato} alt="logoPolizia" />
                    <div className="content">
                        <h3>matrice rischi-web</h3>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Portfolio;
