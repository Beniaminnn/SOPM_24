// src/components/AnimatedText.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedText = () => {
    // Definim animația
    const props = useSpring({
        from: { transform: 'translateZ(-100px) rotateY(0deg)', opacity: 0 },
        to: [
            { transform: 'translateZ(0px) rotateY(360deg)', opacity: 1 },
            { transform: 'translateZ(-100px) rotateY(720deg)', opacity: 0 }
        ],
        config: { duration: 3000 },
        loop: { reverse: true },
    });

    return (
        <animated.div style={{
            ...props,
            fontSize: '5rem',
            color: '#61dafb',
            fontWeight: 'bold',
            textAlign: 'center',
            perspective: '800px', // Adaugăm perspectivă
            transformStyle: 'preserve-3d', // Menținem stilul 3D
            display: 'inline-block', // Folosim inline-block pentru a aplica 3D
        }}>
            React
        </animated.div>
    );
};

export default AnimatedText;
