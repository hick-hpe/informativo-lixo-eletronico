import styled from "styled-components";

const Button = styled.div`
    background-color: #095a27;
    height: 60px;
    width: 200px;
    padding: 10px;
    margin-top: 30px;
    border: none;
    border-radius: 10px;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0e7a39;
    }
`;

export default function SessaoPratica() {
    const abrirLinkJogo = () => {
        window.open('/jogo', '_blank');
    };

    return (
        <div id="jogo" className="container py-5" style={{ fontSize: 18, lineHeight: 1.6 }}>
            <h1
                className="text-center mb-4 fw-bold"
                style={{ color: "#1CDF64", fontSize: "2rem", paddingTop: '30px' }}
            >
                Prática
            </h1>

            <div>
                Ufa, terminamos. Nossa, toda essa teoria cansa demais, não é mesmo? É muita coisa para se absorver de uma vez. <br /><br />

                Que tal exercitarmos o conhecimento com algo mais leve e divertido? Um jogo é perfeito para nos distrair, mas também pode ser uma ferramenta incrível para aprender e aprofundar nossos conhecimentos. Então, por que não jogar algo? Teste tudo o que você aprendeu sobre o lixo eletrônico!
            </div>

            <div className="text-center">
                <Button onClick={abrirLinkJogo}>Vamos lá!</Button>
            </div>
        </div>
    );
}
