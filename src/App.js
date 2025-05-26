import './App.css';

import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from 'react-router';

import { MainBanner } from './MainBanner';
import { SecondBanner } from './SecondBanner';
import { About } from './About';
import { Contacts } from './Contacts';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        index
                        element={
                            <ParallaxProvider>
                                <MainBanner />
                                <SecondBanner />
                            </ParallaxProvider>
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
