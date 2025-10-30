export default function ReduzirReciclar() {
    return (
        <div id="reduzi-reciclar" className="container py-5" style={{ fontSize: 18, lineHeight: 1.6 }}>
            {/* Título */}
            <h1
                className="text-center mb-4 fw-bold"
                style={{ color: "#1CDF64", fontSize: "2rem", paddingTop: '30px' }}
            >
                E como devemos agir? Como reduzir e reciclar esse lixo?
            </h1>

            <div className='p-3'>
                Até agora, foram abordados diversoso dados acerca do lixo eletrônico e os impactos que podem causar tanto no meio ambiente quanto nos seres humanos. Mas então, o que podemos fazer? Como devemos rea gir diante deste cenário? <br /><br />

                Bem, embora seja considerado “lixo”, o lixo eletrônico ainda pode ser transformado e utilizado para gerar valor, contribuindo para a economia. Portanto, saber descartar corretamente contribui tanto para a preservação do meio ambiente quanto para o fortalecimento da economia. <br /><br />

                A redução e a reciclagem do lixo eletrônico exigem preparo, cuidados e responsabilidade, pois esses resíduos podem ser perigosos e até letais para quem realiza o manuseio de forma inadequada.
            </div>

            <ul className="ms-3">
                <li>Para reduzir:</li>
                <ul className="ms-3">
                    <li>Prolongue a vida útil dos aparelhos: faça manutenções preventivas e utilize capas protetoras.</li>
                    <li>Evite trocas desnecessárias:  antes de comprar um novo modelo, avalie se realmente precisa.</li>
                    <li>Doação ou revenda: equipamentos em bom estado podem ser doados ou revendidos para prolongar seu uso.</li>
                    <li>Atualize software e hardware: sempre que possível, atualize o sistema e componentes para evitar a compra de novos dispositivos.</li>
                </ul>
            </ul>

            <ul className="ms-3">
                <li>Para reciclar:</li>
                <ul className="ms-3">
                    <li>Localize um Ponto de Entrega Voluntária (PEV): antes de descartar, procure um ponto de coleta adequado.</li>
                    <li>Remova dados pessoais: limpe celulares e computadores antes do descarte. Mesmo parecendo “apenas lixo”, dados podem ser recuperados por pessoas mal-intencionadas. Separe os componentes: pilhas, baterias, cabos e outros materiais devem ser separados para facilitar a reciclagem.</li>
                    <li>Nunca descarte no lixo comum: isso contamina o solo, a água e o ar, causando sérios danos ao meio ambiente.</li>
                </ul>
            </ul>

            <div className='p-3'>
                A conscientização e pequenas mudanças de hábitos podem diminuir significativamente o impacto ambiental e proteger a saúde de todos.
            </div>
        </div>

    );
}
