import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

const MainCarousel = () => (
    <Carousel
        showThumbs={false}
        stopOnHover={false}
        showArrows={true}
        emulateTouch={true}
        autoPlay={false}
        infiniteLoop={true}
        interval={3000}
        transitionTime={1000}
        showStatus={false}
        dynamicHeight={true}
    >
        <div className="slide">
            <img alt="" src="/carousel/1.jpg" />
            <p className="legend">🧠 Kreativ, chaotisch, komplett verrückt?</p>
        </div>
        <div className="slide">
            <img alt="" src="/carousel/2.jpg" />
            <p className="legend">
                🤘 Mach Schluss mit Langeweile – werde Teil unserer verrückten
                Truppe!
            </p>
        </div>
        <div className="slide">
            <img alt="" src="/carousel/3.jpg" />
            <p className="legend">
                🎉 Spaß, Ideen und echte Freundschaft – das ist unser Verein!
            </p>
        </div>
        {/* <div>
            <img
                alt=""
                src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
            />
            <p className="legend">
                🔧 Nicht nur reden, sondern machen – bei uns wird angepackt!
            </p>
        </div>
        <div>
            <img
                alt=""
                src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
            />
            <p className="legend">
                🚀 Komm vorbei – wir sind vielleicht nicht normal, aber genial!
            </p>
        </div> */}
    </Carousel>
);

export { MainCarousel };
