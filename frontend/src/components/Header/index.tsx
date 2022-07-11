import logo from '../../assets/img/lucasdzin.jpg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://mono.direct/lucasdzin" target="_blank">Lucas Dzin Pedroso</a></p>
            </div>
        </header>
    )
}

export default Header
