import styled from "styled-components"

const Sessao = styled.div`
background-color: #095A27;
color: #fff;
min-height: 50vh;
max-height: 80vh;
display: grid;
place-items: center;
padding: 20px;
font-size: 20px;
text-align: center;
`;

export default function SessaoFundoVerde() {
    return (
        <Sessao>
            Em algum momento, você já parou para pensar para onde vai aquela televisão velha que você não usa mais vai parar? Ou até mesmo aquele celular que você trocou, por um modelo mais moderno? Onde você joga ele? Você sabe onde ele vai parar? Você sabe descartá-lo corretamente? Caso não tenha respondido a essas perguntas, não se preocupe, vamos explicar no decorrer desta leitura.
        </Sessao>
    )
}