// src/components/Loading.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Folosește @react-spring/web

const Loading = () => {
    const props = useSpring({
        from: { width: '0%' },
        to: { width: '100%' },
        config: { duration: 2000 },
        reset: true,
        onRest: () => { console.log('Loading Complete!'); },
    });

    return (
        <div style={{ width: '100%', background: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
            <animated.div style={{
                ...props,
                height: '20px',
                background: '#3b82f6',
            }} />
        </div>
    );
};

export default Loading;
