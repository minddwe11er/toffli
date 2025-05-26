import { Link, useNavigate } from 'react-router';
import './App.css';

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="about">
            <div className="cont">
                <div className="navBar">
                    <Link onClick={() => navigate(-1)}>← Startseite</Link>
                    <Link to="/contacts"> Kontakte →</Link>
                </div>
                <div className="block">
                    <div className="title">
                        🛵 Die Geschichte unseres Vereins
                    </div>
                    <div className="bio">
                        Gegründet wurde der „Töffli-Club Vollgasfreunde“ am 14.
                        Mai 1987 in einer alten Garage irgendwo zwischen zwei
                        Kühen und einer rostigen Zapfsäule. Was als spontane
                        Idee nach einem besonders langen Grillabend begann,
                        wurde bald zur Bewegung – oder sagen wir: zum
                        langsamsten fahrenden Chaos-Trupp der Schweiz.
                        <br />
                        Die Gründungsmitglieder – alle drei im Besitz eines halb
                        funktionierenden Mofas – wollten damals eigentlich nur
                        gemeinsam zur Tankstelle und wieder zurück. Nach drei
                        Stunden, zwei Pannen und einem Wutausbruch wegen
                        verschüttetem Rivella beschlossen sie, dass sie dafür
                        unbedingt einen Verein gründen sollten. Seitdem fahren
                        wir zusammen, schrauben gemeinsam an unseren Töfflis und
                        erzählen dieselben Geschichten jedes Jahr neu. Manche
                        sagen, wir sind verrückt – wir sagen: „Ja, aber wir
                        tragen Helm dabei!“
                    </div>
                </div>
                {/* <div className="block">2</div> */}
            </div>
        </div>
    );
};

export { About };
