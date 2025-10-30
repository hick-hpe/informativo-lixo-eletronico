import styled from "styled-components"

const NavbarStyled = styled.div`
    background-color: #095a27;
    position: sticky;
    top: 0; 
    z-index: 1020;


    .nav-link {
        color: #fff;
        border-radius: 10px;
        padding: 10px;
        transition: all 0.3s ease;
    }
    
    .nav-link:hover {
        background-color: #0b973e;
    }
`;

export default function Navbar() {
    return (
        <NavbarStyled>
            <nav className="navbar navbar-expand-lg shadow">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold" href="">ColetaIF</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#intro-lixo">O que é</a>
                            </li>
                            <li className="nav-item d-none d-md-block">
                                <a className="nav-link" href="#impactos">Impactos</a>
                            </li>
                            <li className="nav-item d-none d-md-block">
                                <a className="nav-link" href="#crescimento">Crescimento Mundial</a>
                            </li>
                            <li className="nav-item d-none d-lg-block">
                                <a className="nav-link" href="#dados-brasil">E-Lixo no Brasil</a>
                            </li>
                            <li className="nav-item d-none d-lg-block">
                                <a className="nav-link" href="#legislacao">Legislação</a>
                            </li>
                            <li className="nav-item d-none d-xl-block">
                                <a className="nav-link" href="#reduzi-reciclar">Como agir?</a>
                            </li>
                            <li className="nav-item d-none d-xl-block">
                                <a className="nav-link" href="#locais-coleta">Locais de Coleta</a>
                            </li>
                            <li className="nav-item d-none d-xl-block">
                                <a className="nav-link" href="#curiosidades">Curiosidades</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#jogo">E-Trash Jogo</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </NavbarStyled>
    )
}
