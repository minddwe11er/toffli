import { useState } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import Registration from './Modal';

const MainBanner = () => {
    const [modalShow, setModalShow] = useState(false);

    const background = {
        image: './main1.png',
        translateY: [0, 0],
        opacity: [1, 0.01],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
    };

    const foreground = {
        image: './main2.png',
        translateY: [0, 0],
        scale: [1, 1.4, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
    };

    const headline = {
        translateY: [0, 30],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div>
                <div className="inset center">
                    <h1 className="headline white">Töffli-Bande</h1>
                </div>
                <div className="credits white inset center">
                    Der imaginäre Verein von Vitalii Nykytiuk
                </div>
            </div>
        ),
    };

    const gradientOverlay = {
        opacity: [0, 1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />,
    };

    const subscribe = {
        translateY: [0, 30],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="bannerBox">
                <div className="subscribe">
                    <div className="title white">
                        Nicht ganz normal? Perfekt – dann passt du genau in
                        unseren Verein!
                    </div>
                    <div className="button-center">
                        <button
                            onClick={() => setModalShow(true)}
                            className="button"
                        >
                            Jetzt mitknattern!
                        </button>
                    </div>
                </div>
                <Registration
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        ),
    };

    return (
        <ParallaxBanner
            layers={[
                background,
                foreground,
                headline,
                gradientOverlay,
                subscribe,
            ]}
            className="full"
        />
    );
};

export { MainBanner };
