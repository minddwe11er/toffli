import { Link, useNavigate } from 'react-router';
import './App.css';

const Contacts = () => {
    const navigate = useNavigate();
    return (
        <div
            className="about-contacts"
            style={{
                backgroundImage: 'url("/contacts_bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="cont">
                <div className="block-left"></div>
                <div className="block">
                    <div className="navBar">
                        <Link onClick={() => navigate(-1)}>← Startseite</Link>
                    </div>
                    <div className="title">
                        📬 Fragen? Grüße? Einfach schreiben!
                    </div>
                    <div className="bio">
                        <iframe
                            className="map"
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1595.0901298058711!2d9.390001335817953!3d47.42212834485077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sch!4v1748204559336!5m2!1suk!2sch"
                            width="550"
                            height="350"
                            style={{ border: '0' }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="contacts">
                            <div style={{ display: 'inline-block' }}>
                                <div className="author">
                                    <div className="photo"></div>
                                    <div className="name">
                                        Vitalii Nykytiuk <br />{' '}
                                        <i> der Gründer</i>
                                    </div>
                                </div>
                            </div>
                            <div className="details">
                                <div className="details-block">
                                    <div className="email">
                                        vitaliiistinderschweiz@gmail.com
                                    </div>
                                    <div>
                                        <a href="tel:+41796506193">
                                            +41796506193
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.instagram.com/minddwe11er">
                                            @minddwe11er
                                        </a>{' '}
                                        <img
                                            alt="author"
                                            src="https://static.cdninstagram.com/rsrc.php/v4/yx/r/H1l_HHqi4p6.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        Ich freue mich immer, wenn jemand den Weg zu unserem
                        verrückten Verein findet. Egal ob du Mitglied werden
                        willst, Ideen hast oder einfach neugierig bist – schreib
                        mir ruhig. Ich lese jede Nachricht selbst und antworte,
                        sobald mein Moped eine Pause macht!
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Contacts };
