import React, { useState, useEffect, Button, View, Text } from 'react';
import "../styles/Cards.css"
import Profile from '../Assets/CardsPics/Profile.png';

const Cards = ({image, text, referencia}) => {
  return (
    <a className='referencia-card' href={referencia} target='blank'>
        <div className='containerCards'>
            <div className="info-container">
                <div className="socialMedia">
                    <div className="logo">
                        <img src={Profile} className="logo" />
                    </div>
                    <div className='account-info'>
                        <div className='tittle'>
                            grupoestudiantil_b.eco
                        </div>
                        <div className='account-name'>
                            Tecnológico de Monterrey Campus Guadalajara
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    {text}
                </div>
            </div>
            <img src={image} className="card-imgage" />
        </div>
    </a>
  )
}

export default Cards