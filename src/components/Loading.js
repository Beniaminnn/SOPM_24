import React, { useState, useEffect } from 'react';
import './Loading.css'; // Asigură-te că ai acest fișier CSS

function Loading() {
    const [progress, setProgress] = useState(0); // Inițializare progres

    useEffect(() => {
        // Simulează progresul în fiecare 30ms
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100)); // Crește progresul cu 1% până la 100%
        }, 30);

        return () => clearInterval(interval); // Curăță intervalul
    }, []);

    return (
        <div className="loading-container">
            <div className="loading-bar">
                <div className="loading-progress" style={{ width: `${progress}%` }} />
            </div>
            <p>{progress}%</p> {/* Afișează procentul de încărcare */}
        </div>
    );
}

export default Loading;
