import { useState , useRef } from 'react'
import Home from './componentes/Home';
import Game from './componentes/Game';
import FeedBack from './componentes/FeedBack';
import './App.css'

function App() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
        <Home  />
        <Game  setNumero= {setNumero} numero= {numero} />
        <Feedback numero= {setNumero}/>
  </div>
  )
}

export default App;
