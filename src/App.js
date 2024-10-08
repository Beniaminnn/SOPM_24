import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import MainContent from './components/MainContent';

function App() {
    const [loading, setLoading] = useState(true); // Inițial setăm pagina pe loading

    useEffect(() => {
        // Simulează un progres de încărcare (animația durează 3 secunde)
        const timer = setTimeout(() => {
            setLoading(false); // După 3 secunde, loading devine fals și intrăm pe site
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {loading ? <Loading /> : <MainContent />} {/* Dacă loading este true, afișăm animația */}
        </div>
    );
}

export default App;
