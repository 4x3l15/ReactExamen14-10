import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FeedBack from './FeedBack';

const Game = ({setNumero} , {numero}) => {
    
    return 
    (
        <div>
            <input className='Numero' type="number" />
            <button></button>
        </div>
    )
};

export default Game