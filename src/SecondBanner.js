import { ParallaxBanner } from 'react-scroll-parallax';
import ProsAndCons from './ProsAndCons';

const SecondBanner = () => {
    const background = {
        image: '/prosandcons.jpg',
        scale: [1, 1.2, 'easeInQuad'],
        shouldAlwaysCompleteAnimation: true,
    };

    const content = {
        opacity: [0.5, 1],
        scale: [0, 1, 'easeInQuad'],
        shouldAlwaysCompleteAnimation: true,
        children: <ProsAndCons />,
        expanded: false,
    };

    return <ParallaxBanner layers={[background, content]} className="full" />;
};

export { SecondBanner };
