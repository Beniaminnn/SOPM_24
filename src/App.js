// src/App.js
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import AnimatedText from './components/AnimatedText';
import { useScroll, animated } from '@react-spring/web';

function App() {
    const [loading, setLoading] = useState(true);
    const { scrollY } = useScroll();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App" style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '50px',
            height: '100vh', // Asigurăm că div-ul principal umple ecranul
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowY: 'scroll' // Permitem derularea pe axa verticală
        }}>
            <h1>React Spring Loading Animation</h1>
            {loading ? <Loading /> : (
                <animated.div style={{
                    position: 'fixed', // Menținem textul fixat
                    top: '50%', // Centrăm pe verticală
                    transform: scrollY.to([0, 1000], ['translateY(0px)', 'translateY(-300px)']), // Animație pe baza scroll-ului
                    fontSize: '5rem',
                    color: '#61dafb',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    perspective: '800px',
                    display: 'inline-block',
                }}>
                    React
                </animated.div>
            )}
            <div style={{ height: '2000px', width: '100%', marginTop: '50px' }}>
                {/* Text lung pentru testare */}
                <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate justo vel metus varius, a aliquam erat vehicula. Aenean nec nunc id leo consequat efficitur. Maecenas aliquet suscipit est. Integer gravida neque nec dui elementum ultricies. Sed vel felis ut erat auctor bibendum. Quisque tristique, libero at hendrerit feugiat, eros nulla condimentum odio, non efficitur neque nulla nec est. Ut ut lectus nec est malesuada finibus. Sed tincidunt sapien non diam pretium, id sagittis nunc bibendum. Sed fringilla volutpat dui, nec elementum nisl viverra at. Duis convallis elit sit amet semper consequat. Fusce sit amet eros turpis. Cras posuere, odio id convallis scelerisque, risus eros sodales sapien, et lacinia lacus est non nisi. Sed posuere magna ac arcu scelerisque, eu dictum mi suscipit.
                </p>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                    Donec maximus nunc et lacinia posuere. Nullam euismod urna a cursus accumsan. Curabitur sit amet enim nec libero posuere auctor at ac lectus. Sed consequat felis ut augue fringilla, ac malesuada justo interdum. Vivamus consequat sapien vel urna accumsan, in posuere augue consequat. Nunc vulputate dui nec libero ultrices, nec feugiat magna auctor. Mauris at sapien eget elit tincidunt tincidunt. Nulla facilisi. Nunc sit amet metus vel neque ultrices vestibulum sit amet ac lectus. Etiam maximus, libero et ultrices hendrerit, lacus justo ullamcorper ligula, sit amet gravida velit orci sed lorem.
                </p>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                    Etiam scelerisque nunc ac sem consectetur, vel pellentesque neque molestie. Vivamus tristique turpis a risus fermentum, ac viverra elit dignissim. Fusce efficitur justo nec elit bibendum feugiat. Nunc sagittis, lectus non dignissim ultricies, leo nunc interdum est, ac vulputate neque sapien vitae erat. Phasellus non sem a arcu consectetur facilisis ut nec quam. Sed lacinia posuere ipsum, ut gravida neque vehicula sit amet. Cras bibendum purus non augue efficitur, nec cursus felis consequat. Sed euismod metus a purus pellentesque, non ullamcorper ligula suscipit. Nullam vestibulum odio vitae mauris gravida, et vestibulum nulla sodales. Vivamus vel velit nunc.
                </p>
                {/* Adaugă mai multe paragrafe după cum este necesar pentru a avea un conținut lung */}
            </div>
        </div>
    );
}

export default App;
