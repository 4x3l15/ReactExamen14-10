import { useState , useRef } from 'react'
import Home from './componentes/Home';
import Game from './componentes/Game';
import FeedBack from './componentes/FeedBack';
import { useNavigate } from 'react-router-dom';

import './App.css'

function App () {
  const [numero, setNumero] = useState(0);
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  return (
    <div>
        <Home  />
        <Game  setNumero= {setNumero} numero= {numero} />
        <Feedback numero= {setNumero}/>
  </div>
  )
}

export default App;
