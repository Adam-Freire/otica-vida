import React from 'react';
import './style.css'


export default function Topo() {
    return(
        <header id='topo' className=" topo">
            <div className="limitar-secao box-topo ">
                <img src="./assets/logo.png"></img>

                <nav className="navegacao">
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    )
}