export default function SessaoCuriosidades() {
    return (
        <div id="curiosidades" className="container py-5" style={{ fontSize: 18, lineHeight: 1.6 }}>
            {/* Título */}
            <h1
                className="text-center mb-4 fw-bold"
                style={{ color: "#1CDF64", fontSize: "2rem", paddingTop: '30px' }}
            >
                Curiosidades
            </h1>

            <ul className="ms-3">
                <li>Em 2019, o mundo produziu cerca de 50 milhões de toneladas de lixo eletrônico. A reciclagem de todo esse montante poderia render US$250 bilhões.</li>
                <li>O maior país gerador de lixo eletrônico no mundo é a China, seguida de EUA e Índia, com assustadores 10,1 milhões, 6,9 e 3,2 de toneladas, respectivamente.</li>
                <li>O Brasil produz 2,4 milhões de toneladas de lixo eletrônico por ano, ocupando a quinta posição do ranking e maiores produtores.</li>
                <li>A reciclagem de uma tonelada de celulares usados pode render até 130 kg de cobre, além de ouro e prata.</li>
                <li>Apenas 22,3% do lixo eletrônico mundial é reciclado corretamente, o restante acaba em lixões e aterros inadequados.</li>
                <li>O Brasil produz em média 11,4 kg de lixo eletrônico per capita por ano, colocando o país entre os maiores produtores globais, atrás de China e EUA.</li>
                <li>Os 62 milhões de toneladas de resíduos eletrônicos conseguiriam preencher 1,5 milhões de caminhões.</li>
            </ul>
        </div>
    );
}
