import React from 'react';
import './style.css'

export default function SecaoProdutos() {
    return (
        <section id="produtos" className="secao-produtos">
            <div className=" limitar-secao">
               <h2 className='titulo'>NOSSOS PRODUTOS</h2> 
               <p className='paragrafo'>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
               <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
               
               <div className="container-card">
                    <div>
                       <h3>Óculos de grau</h3> 
                       <img src='../assets/oculos01.png'/>
                       <p className='card-escrito'>R$500,00</p>
                    </div>

                    <div>
                       <h3>Óculos transition</h3>
                       <img src='assets/oculos02.png'/> 
                       <p className='card-escrito'>R$ 750,00</p>                       
                    </div>

                    <div>
                        <h3>Óculos de sol</h3>
                        <img src='assets/oculos03.png'/>
                        <p className='card-escrito'>R$ 700,00</p>
                    </div>

                    <div>
                        <h3>Óculos infantil</h3>
                        <img src='assets/oculos04.png'/>
                        <p className='card-escrito'>R$500,00</p>
                    </div>

                 </div>

                    <p className="titulo-ul">Todos os nossos produtos incluem:</p>

                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutençao preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>               
            </div>
        </section>
    )
}