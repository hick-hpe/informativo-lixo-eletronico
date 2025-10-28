import minhaImagem from '../assets/img/lixos.jpg';
import minhaImagem2 from '../assets/img/lixo-2.jpg';
import minhaImagem3 from '../assets/img/lixo-3.jpg';

export default function SessaoIntroLixo() {
    return (
        <div className="container py-5" style={{ fontSize: 18, lineHeight: 1.6 }}>
            {/* Título */}
            <h1
                className="text-center mb-4 fw-bold"
                style={{ color: "#1CDF64", fontSize: "2rem" }}
            >
                O que é lixo eletrônico?
            </h1>

            <div className="row align-items-center">
                {/* Texto */}
                <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                    <p>
                        O <strong>lixo eletrônico</strong>, também conhecido como{" "}
                        <strong>REEE (Resíduos de Equipamentos Elétricos e Eletrônicos)</strong>,
                        é o tipo de lixo derivado de materiais eletrônicos que já não possuem mais utilidade.
                        Alguns exemplos incluem:
                    </p>

                    <ul className="ms-3">
                        <li>Computadores</li>
                        <li>Tablets</li>
                        <li>Câmeras</li>
                        <li>Lâmpadas</li>
                        <li>Televisores</li>
                        <li>Rádios</li>
                        <li>Telefones</li>
                        <li>Fones de ouvido</li>
                        <li>Pilhas</li>
                        <li>Baterias</li>
                    </ul>
                </div>

                {/* Imagens */}
                <div className="col-12 col-lg-5">
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                        {/* Linha superior de imagens */}
                        <div className="d-flex flex-row gap-3 justify-content-center">
                            <img
                                src={minhaImagem}
                                alt="Lixo eletrônico"
                                className="img-fluid rounded shadow-sm"
                                style={{
                                    maxWidth: "48%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                            />
                            <img
                                src={minhaImagem2}
                                alt="Descarte eletrônico"
                                className="img-fluid rounded shadow-sm"
                                style={{
                                    maxWidth: "48%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        {/* Imagem inferior maior */}
                        <img
                            src={minhaImagem3}
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

            </div>
        </div>
    );
}
