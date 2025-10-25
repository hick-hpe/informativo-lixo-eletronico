import styled from "styled-components"

const NavbarStyled = styled.div`
    .navbar {
        background-color: #1CDF64 !important;
    }

    .nav-link {
        color: #fff;
        border-radius: 10px;
        padding: 10px;
        transition: all.5;
    }
    
    .nav-link:hover {
        background-color: #0b973e;
    }
`;

export default function Navbar() {
    return (
        <NavbarStyled>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold" href="#">Nome</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">O que é</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Impactos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Crescimento Mundial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Legislação</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">E-Trash Jogo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </NavbarStyled>
    )
}
