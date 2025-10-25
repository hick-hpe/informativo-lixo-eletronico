import styled from "styled-components"

const FooterStyled = styled.div`
    background-color: #1CDF64;
    padding: 20px; // qqr coisa mudar

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
                <div className="col-6 text-white">
                    <div className="fw-bold fs-5">Nome</div>
                    <div className="mt-5">
                        <div>© 2025 - Projeto de Extensão IFPR Cascavel. Todos os direitos reservados.</div>
                        <div>Desenvolvido por:  <i>Palermo e David</i></div>
                    </div>
                </div>
                <div className="col">
                    <div className="header-col-2">
                        <div className="fw-bold fs-5">LINK ÚTEIS</div>
                    </div>
                    <ul>
                        <li>O que é?</li>
                        <li>Impactos</li>
                        <li>Impactos</li>
                        <li>Legislação</li>
                        <li>Pontos de Coleta</li>
                        <li>E-Trash Jogo</li>
                    </ul>
                </div>
                <div className="col">
                    <div className="header-col-2">
                        <div className="fw-bold fs-5">LINK ÚTEIS</div>
                    </div>
                    <ul>
                        <li>O que é?</li>
                        <li>Impactos</li>
                        <li>Impactos</li>
                        <li>Legislação</li>
                        <li>Pontos de Coleta</li>
                        <li>E-Trash Jogo</li>
                    </ul>
                </div>
            </footer>
        </FooterStyled>
    )
}
