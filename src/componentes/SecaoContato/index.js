import React from 'react';
import './style.css'

export default function SecaoContato() {
    return (
        <section id="contato" className='secao-contato'>
           <div className='limitar-secao contato'>
            <h3>FALE CONOSCO</h3>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

            <div className='contatos'>
                <div className='contato-conteudo'>
                    <h4>Contato</h4>
                    <div className='container-img'>
                        <img src='./assets/local.png' />
                        <span>Nova Iguaçu, RJ</span>
                    </div>
                    <div className='container-img'>
                        <img src='./assets/telefone.png' />
                        <span>(21) 9999-9999</span>
                    </div>
                    <div className='container-img'>
                        <img src='./assets/email.png' />
                        <span>contato@oticavida.com</span>
                    </div>
                </div>
                <div className='contato-conteudo'>
                    <h4>Nossas Redes Sociais</h4>
                   
                    <div className='container-img'>
                        <img src='./assets/fb.png' title="Ícone facebook" alt="logo do facebook"/>
                        <span>/OticaVida</span>
                    </div>
                    <div className='container-img'>
                        <img src='./assets/ig.png' />
                        <span>@oticavidarj</span>
                    </div>
                    <div className='container-img'>
                        <img src='./assets/tt.png' />
                        <span>@oticavidarj</span>
                    </div>
                </div>
            </div>
           </div> 
        </section>
    )
}