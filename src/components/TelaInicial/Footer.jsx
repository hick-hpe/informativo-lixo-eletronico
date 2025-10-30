import styled from "styled-components"
import imagemLogo from "/logo.png"

const FooterStyled = styled.div`
    background-color: #095a27;
    padding: 20px;

    .col {
        padding: 10px;
        padding-bottom: 30px;
    }

    .header-col-2 { 
        border-bottom: 3px solid #fff;
        color: #fff;
        padding-bottom: 10px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    ul li {
        color: #fff;
        list-style: none;
        text-align: start !important;
        padding: 2px;
    }
`;

export default function Navbar() {
    return (
        <FooterStyled>
            <footer className="row">
                <div className="col-12 col-sm-4 mt-3 mt-sm-0 text-white">
                    <div className="fw-bold fs-5">
                        <img
                            src={imagemLogo}
                            alt="Centro de reciclagem"
                            className="img-fluid rounded shadow-sm"
                            style={{
                                width: "50px",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                        <span className="ms-2">ColetaIF</span>
                    </div>
                    <div className="mt-3">
                        <div>© 2025 - Projeto de Extensão IFPR Cascavel. Todos os direitos reservados.</div>
                        <div>Desenvolvido por:  <i>Henrique Palermo Emerick, David Aparecido Hotes</i></div>
                        <i>Anna, Paulo</i>
                    </div>
                </div>
                <div className="col-12 col-sm-4 mt-3 mt-sm-0">
                    <div className="header-col-2">
                        <div className="fw-bold fs-5">LINK ÚTEIS</div>
                    </div>
                    <ul>
                        <ul>
                            <li><a className="nav-link" href="/#oque-e">O que é?</a></li>
                            <li><a className="nav-link" href="/#impactos">Impactos</a></li>
                            <li><a className="nav-link" href="/#crescimento">Crescimento Mundial</a></li>
                            <li><a className="nav-link" href="/#legislacao">Legislação</a></li>
                            <li><a className="nav-link" href="/#pontos-coleta">Pontos de Coleta</a></li>
                            <li><a className="nav-link" href="/#jogo">E-Trash Jogo</a></li>
                        </ul>
                    </ul>
                </div>
                <div className="col-12 col-sm-4 mt-3 mt-sm-0">
                    <div className="header-col-2">
                        <div className="fw-bold fs-5">REDES SOCIAIS</div>
                    </div>
                    <ul>
                        <li>
                            <a className="nav-link" href="https://instagram.com" target="_blank">
                                <i className="bi bi-instagram"></i>
                                <span className="ms-2">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="https://facebook.com" target="_blank">
                                <i className="bi bi-facebook"></i>
                                <span className="ms-2">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="https://twitter.com" target="_blank">
                                <i className="bi bi-twitter"></i>
                                <span className="ms-2">Twitter</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </FooterStyled>
    )
}
