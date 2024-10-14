import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nombreRef = useRef('');
  const navigate = useNavigate();

  const comienzaJuego = () => {
    const jugadorNombre = nombreRef.current.value;
    if (jugadorNombre) {
      navigate('/game', { state: { jugadorNombre } });
    }
  };

  return (
    <div>
      <h1>JUEGA A ADIVINAR EL NUMERO</h1>
      <input type="text" placeholder="Ingresa tu nombre" ref={nombreRef} />
      <button onClick={comienzaJuego}>Comenzar Juego</button>
    </div>
  );
};

export default Home;
