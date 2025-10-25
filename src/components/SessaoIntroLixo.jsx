import minhaImagem from '../assets/img/img-intro-lixo.png';

export default function SessaoIntroLixo() {
    return (
        <div className="container p-5" style={{ fontSize: 20 }}>
            <h1 className="text-center mb-4" style={{ color: "#1CDF64" }}>
                O que é lixo eletrônico?
            </h1>
            <div className='row'>
                <div className='col'>
                    <div>
                        O lixo eletrônico, também conhecido como REEE (Resíduos de Equipamentos Elétricos e Eletrônicos), é o tipo de lixo derivado de materiais eletrônicos que já não possuem mais utilidade. Alguns exemplos:
                    </div>
                    <ul>
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
                <div className='col-3 d-flex align-items-center justify-content-center'>
                    <img
                        src={minhaImagem}
                        alt="Descrição"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    )
}
