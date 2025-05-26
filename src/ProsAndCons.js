import { NavLink } from 'react-router';

export default function ProsAndCons() {
    return (
        <div className="pros-and-cons">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="block">
                            <div className="title">🧨 Was wir anbieten</div>
                            <ul>
                                <li>
                                    Legendäre Ausfahrten mit garantiertem
                                    Muskelkater vom Grinsen
                                </li>
                                <li>
                                    Fachsimpeln über Zündkerzen und andere
                                    Lebensfragen
                                </li>
                                <li>Ersatzteile? Vielleicht. Bier? Sicher.</li>
                                <li>
                                    Clubhaus, Chaos und eine Portion Wahnsinn
                                </li>
                                <li>Gemeinsam schrauben, fluchen und lachen</li>
                                <li>
                                    Sound-Check für dein Moped – je lauter,
                                    desto besser
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="block">
                            <div className="title">
                                🛠️ Was du mitbringen solltest
                            </div>
                            <ul>
                                <li>
                                    Einen fahrbaren Untersatz mit Charakter
                                    (auch wenn er manchmal streikt)
                                </li>
                                <li>
                                    Humor, Öl unter den Fingernägeln und Liebe
                                    zur Strasse
                                </li>
                                <li>Kein Bock auf Mainstream</li>
                                <li>Den Mut, mit uns gesehen zu werden</li>
                                <li>
                                    Einen Helm – für den Kopf und gegen Mücken
                                    im Gesicht
                                </li>
                                <li>
                                    Die Fähigkeit, Benzingeruch mit Parfum zu
                                    verwechseln
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="block">
                            <div className="title">
                                🏁 Wie du mitmachen kannst
                            </div>
                            <ul>
                                <li>
                                    Schreib uns eine Nachricht oder hupe dreimal
                                    am Clubhaus
                                </li>
                                <li>
                                    Komm zu einem unserer Treffen – Moped
                                    optional, gute Laune Pflicht
                                </li>
                                <li>
                                    Aufnahmeprüfung? Nur ein Wheelie. Oder ein
                                    Witz.
                                </li>
                                <li>
                                    Und vergiss nicht: Nicht ganz dicht? Perfekt
                                    – dann passt du zu uns!
                                </li>
                                <li>
                                    Bring ein Foto von deinem Moped – egal ob
                                    schön oder rostig
                                </li>
                                <li>
                                    Wenn dein Moped einen Namen hat – bist du
                                    schon halb dabei
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subtitle white center">
                <span>
                    Wir sind vielleicht langsam, dafür aber laut, ölig,
                    eigenartig – und genau deshalb die coolste Gang auf zwei
                    Rädern{' '}
                    <NavLink to="/about">seit Erfindung des Pedals</NavLink>!
                </span>
            </div>
        </div>
    );
}
