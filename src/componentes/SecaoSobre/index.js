import React from 'react';
import './style.css'

export default function SecaoSobre() {
    return (
        <section id="sobre" className="secao-sobre">
            <div className='limitar-secao quem-somos'>
            <h3>QUEM SOMOS NÓS?</h3>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
            </div>

            <div className='box-card limitar-secao'>
                <img src='./assets/loja.png' />

                <div className='card'>
                    <h3>NOSSAS FILIAIS</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                
                <div className='card'>
                    <h3>ATENDIMENTO FLEXIVEL</h3>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>

                <img src='./assets/atendimento.png'/>
            </div>
        </section>
    )
}