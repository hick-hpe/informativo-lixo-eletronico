import minhaImagem from '../../assets/img/impactos.png';

export default function SessaoCrescimento() {
    return (
        <div id='crescimento' className="container py-5" style={{ fontSize: 18, lineHeight: 1.6 }}>
            {/* Título */}
            <h1
                className="text-center mb-4 fw-bold"
                style={{ color: "#1CDF64", fontSize: "2rem", paddingTop: '30px' }}
            >
                Crescimento Mundial do Lixo Eletrônico
            </h1>

            <div className='p-3'>
                De acordo com a pesquisa The Global E-waste Monitor, o mundo atingiu um recorde histórico na geração de lixo eletrônico, colocando o Brasil na 5° posição no ranking global.
            </div>

            <p className='p-3'>
                Principais dados do relatório:
            </p>

            <ul className="ms-3">
                <li>62 milhões de toneladas de lixo eletrônico produzidas em 2022 — um aumento de 82% em relação a 2010.</li>
                <li>Projeção de crescimento de 32% até 2030, chegando a 82 milhões de toneladas.</li>
                <li>Bilhões de dólares em recursos valiosos desperdiçados e descartados.</li>
                <li>Apenas 1% da demanda mundial por elementos de terras raras é atendida pela reciclagem de lixo eletrônico.</li>
            </ul>
        </div>
    );
}
