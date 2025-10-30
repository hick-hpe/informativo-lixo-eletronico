import Navbar from '../components/TelaInicial/Navbar';
import Hero from '../components/TelaInicial/Hero';
import SessaoIntroLixo from '../components/TelaInicial/Sessao_01_IntroLixo';
import SessaoFundoVerde from '../components/TelaInicial/Sessao_02_FundoVerde';
import SessaoImpactos from "../components/TelaInicial/Sessao_03_Impactos";
import SessaoCrescimento from "../components/TelaInicial/Sessao_04_Crescimento";
import SessaoDadosBrasil from "../components/TelaInicial/Sessao_05_DadosBrasil";
import SessaoLegislacao from "../components/TelaInicial/Sessao_06_Legislacao";
import SessaoReduzirReciclar from "../components/TelaInicial/Sessao_07_ReduzirReciclar";
import SessaoLocaisDeColeta from "../components/TelaInicial/Sessao_08_SessaoLocaisDeColeta";
import SessaoCuriosidades from "../components/TelaInicial/Sessao_09_Curiosidades";
import SessaoPratica from "../components/TelaInicial/Sessao_10_Pratica";
import Footer from '../components/TelaInicial/Footer';

export default function TelaInicial() {

  return (
    <>
      <Navbar />
      <Hero />
      <SessaoIntroLixo />
      <SessaoFundoVerde />
      <SessaoImpactos />
      <SessaoCrescimento />
      <SessaoDadosBrasil />
      <SessaoLegislacao />
      <SessaoReduzirReciclar />
      <SessaoLocaisDeColeta />
      <SessaoCuriosidades />
      <SessaoPratica />
      <Footer />
    </>
  )
}
