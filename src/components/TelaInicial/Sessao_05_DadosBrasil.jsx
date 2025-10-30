export default function SessaoDadosBrasil() {
    return (
        <div id="dados-brasil" className="container py-5" style={{ fontSize: 18, lineHeight: 1.6 }}>
            <h1
                className="text-center mb-4 fw-bold"
                style={{ color: "#1CDF64", fontSize: "2rem", paddingTop: '30px' }}
            >
                Brasil e o lixo eletrônico
            </h1>

            <div className='p-3'>
                Segundo as pesquisas da Agência Brasil (2021), o Brasil está entre os maiores produtores de lixo eletrônico no mundo. A pesquisa revela que quase um terço das pessoas nunca ouviram falar em algum ponto de coleta ou descarte adequado de lixos eletrônicos.
                Complementando esses dados, a pesquisa da The Global E-waste Monitor traz dados que demonstram esse aumento da produção de lixo no país, dos anos de 2018 a 2022. Abaixo, uma tabela comparativa da produção de lixo eletrônico no decorrer destes anos.
            </div>


            <div className="text-center">
                <small className="text-muted">Tabela 1: Geração de lixo eletrônico por ano</small>
            </div>
            <table class="table text-center border">
                <caption className="text-center">Fonte: Adaptação de The Global E-waste (2022)</caption>
                <thead>
                    <tr>
                        <th scope="col">Ano</th>
                        <th scope="col">Lixo eletrônico gerado (kg per capita)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2018</td>
                        <td>10,2</td>
                    </tr>
                    <tr>
                        <td>2019</td>
                        <td>10,6</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td>10,9</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>11,1</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>11,4</td>
                    </tr>
                </tbody>
            </table>

            <div className='p-3'>
                Esse aumento está ligado ao processo da globalização, que acelerou a inovação tecnológica, fazendo com que novos aparelhos sejam lançados em intervalos cada vez menores, aumentando o descarte de equipamentos eletrônicos. <br /><br />

                Outro fator que impulsiona esse ciclo é a obsolescência programada — prática na qual fabricantes deliberadamente limitam a vida útil dos produtos, seja utilizando materiais de menor durabilidade ou restringindo funcionalidades. Isso torna o produto obsoleto em pouco tempo, estimulando o consumo contínuo e aumentando o volume de resíduos eletrônicos. <br /><br />

                No caso do Brasil, apesar do grande volume produzido, apenas 3% desse lixo é reciclado. Isso é preocupante porque esses resíduos contêm materiais tóxicos que podem contaminar o solo, a água e o ar, prejudicando a saúde das pessoas e do meio ambiente. <br /><br />

                Além disso, muitos metais valiosos, como ouro e cobre, acabam sendo descartados, causando desperdício de recursos naturais e econômicos importantes, e aumentando a necessidade de extração mineral — um processo que traz impactos ambientais significativos. <br /><br />

                Por isso, aumentar a reciclagem é fundamental para proteger nosso planeta, usar melhor os recursos disponíveis, conservar os recursos naturais e promover um consumo mais sustentável.
            </div>

        </div>
    )
}