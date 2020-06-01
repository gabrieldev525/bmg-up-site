import React  from 'react';

// Local imports
import './style.css'
import Image from '../../../static/image/image-estati.png'


function secondPage() {
    return(        
        <div className="main">

            {/* NAV BAR */}
            <nav className="nav">
                <div class="topnav">
                    <a href="#home">Depoimentos</a>
                    <a href="#news">Destaques</a>
                    <a href="">Inicio</a>                
                </div>
            </nav>
            {/* END NAV BAR */}

            {/* TITLE */}
            <div className="title">
                <h3>Como aprender sobre educação financeira em algumas horas?</h3>
            </div>
            {/* END TITLE */}

            {/* IMAGE */}
            <div className="image-estatistica">
                <img className='image' src={Image} />
            </div>
            {/* END IMAGE */}

            {/* CONTENT BLOCK */}
            <div className="container">
                <h4>Uma explicação rápida e didática sobre juros</h4>
                <p>
                Eu sei que você já entende o termo juros e o leva como pedra no sapato, mas nesse pequeno texto eu vou te explicar como ele pode te ajudar. 
                </p>
                <br />
                <p>
                Existem basicamente dois tipos de juros. Os juros que rendem em um valor pré-estabelecido e o juros que rende sobre o próprio juros. São bastantes chamados juros simples e compostos.
                </p>
                <br />
                <p>
                O juros simples funciona da seguinte maneira: Imagina que você investe R$ 100 a juros simples com uma taxa de 2% ao mês. Isso significa que após um mês você vai ter R$ 102, pois 2% de R$ 100 é igual a R$ 2. No próximo mês vai para R$ 104, pois os 2% continua sobre o valor inicial de R$ 100.
                </p>
                <br />
                <p>
                Agora o juros compostos, rendem ao valor dos juros anterior, como assim? Primeiro rende o 2% dos R$ 100 e isso te dá R$ 102. Agora no segundo mês os 2% são com base nos R$ 102 o que gera R$104,04 e assim continua mês a mês. 
                </p>
                <br />
                <p>
                Dê um feedback sobre a explicação: colocar estrelinhas.
                </p>
            </div>
            {/* END CONTENT BLOCK */}






            {/* FOOTER */}
            <div className="footer">
                <p className="footer-content">BGM-2020.</p>
            </div>
            {/* END FOOTER */}




        </div>
       
    )
}



export  default secondPage