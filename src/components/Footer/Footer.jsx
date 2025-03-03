import './Footer.css'

function Footer() {
    return (
        <div className="footer-component" id="footer">
            <div className="footer-wrap">
                <div className="footer-info">
                    <h3>Kontakt informacije</h3>
                    <p className='address'>Adresa: Jastrebacka br. 10, 37000 Krusevac</p>
                    <p className='telephone'>Broj telefona: 037/422-969</p>
                    <p className='email'>Email: gas@cestorveks.com</p>
                </div>
                <div className="footer-docs">
                    <h3>Relevatna dokumenta</h3>
                    <a href="/documents/Licenca.pdf" target="_blank" rel="noopener noreferrer">
                        Licenca za obavljanje energetske delatnosti
                    </a>
                    <a href="/documents/Katalog.pdf" target="_blank" rel="noopener noreferrer">
                        Katalog kompresora za CNG
                    </a>
                </div>
            </div>
            <div className="footer-trademark">© 2025 Sva prava zadržava CestorVeks doo</div>
        </div>
    )
}   

export default Footer;