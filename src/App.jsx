import './App.css'
import React, { useState, useEffect } from 'react';
import LoadingScreen from './pages/LoadingScreen';
import Home from './pages/Home'; 

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <LoadingScreen /> : <Home />}
    </>
  );
}