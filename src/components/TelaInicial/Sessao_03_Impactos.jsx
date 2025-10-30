import minhaImagem from '../../assets/img/impactos.png';

export default function SessaoImpactos() {
    return (
        <div id='impactos' className="container py-5" style={{ fontSize: 18, lineHeight: 1.6 }}>
            {/* Título */}
            <h1
                className="text-center mb-4 fw-bold"
                style={{ color: "#1CDF64", fontSize: "2rem", paddingTop: '30px' }}
            >
                Impactos ambientais
            </h1>

            <div className='p-3'>
                Você sabe o que acontece quando o lixo eletrônico é descartado de forma incorreta no meio ambiente? Quais são as consequências disso?
            </div>

            <div className="row align-items-center">
                {/* Imagem */}
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-4 mb-lg-0">
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                        <img
                            src={minhaImagem}
                            alt="Centro de reciclagem"
                            className="img-fluid rounded shadow-sm"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>

                {/* Texto */}
                <div className="col-12 col-lg-7 order-2 order-lg-1">
                    <p>
                        Bem, esses resíduos são formados por materiais de origem inorgânica, como cobre e alumínio, além de metais pesados altamente tóxicos — mercúrio, cádmio, berílio e chumbo.
                        Quando entram em contato com o solo ou com a água, esses elementos podem ser absorvidos pela natureza e causar sérios danos à saúde humana e animal, como:
                    </p>

                    <ul className="ms-3">
                        <li>Problemas na respiração, pela liberação de gases</li>
                        <li>Intoxicação, causada pela ingestão destes resíduos, causando danos cancerígenos</li>
                        <li>Irritações na pele</li>
                        <li>Distúrbios gastrointestinais</li>
                        <li>Distúrbios na tireoide</li>
                    </ul>
                </div>
            </div>

            <div className="p-3">
                Com isso, podemos entender que o descarte incorreto não prejudica apenas o meio ambiente, mas também compromete a saúde de comunidades inteiras.
            </div>
        </div>
    );
}
