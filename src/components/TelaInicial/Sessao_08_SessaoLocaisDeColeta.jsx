export default function SessaoLocaisDeColetaroLixo() {
    return (
        <div id="locais-coleta" className="container py-5" style={{ fontSize: 18, lineHeight: 1.6 }}>
            {/* Título */}
            <h1
                className="text-center mb-4 fw-bold"
                style={{ color: "#1CDF64", fontSize: "2rem", paddingTop: '30px' }}
            >
                Locais de Coleta
            </h1>

            <div>
                Ok, agora sabemos da importância de descartar corretamente os resíduos eletrônicos. Mas onde podemos encontrar esses pontos de coleta? <br />

                Para facilitar o descarte adequado e conscientizar a população, o Instituto Federal Campus Cascavel atua como ponto de coleta de lixo eletrônico. <br />

                Assim, moradores de Cascavel podem levar seus equipamentos eletrônicos que não usam mais para esse local, contribuindo para o meio ambiente e para a saúde pública. <br />

                Além do Instituto Federal, existem outros pontos de coleta na cidade — confira nossa lista atualizada para saber onde descartar corretamente seu lixo eletrônico. <br />
            </div>

            <div className='mt-3'>Pontos de coleta de lixo eletrônico em Cascavel-PR:</div>
            <ul className="ms-3">
                <li>Ponto de Coleta lixo Eletrônico Cascavel - R. São Paulo, 2828</li>
                <li>Ecoponto Brasília - Unicacoop - R. Valmor Frasson, 79</li>
                <li>Lixo Eletrônico - Descarte Aqui - R. das Azaléias, 1289</li>
                <li>Casas Bahia - Avenida Brasil, 5964</li>
                <li>Pontofrio - Avenida Brasil, 5950</li>
            </ul>
        </div>
    );
}
