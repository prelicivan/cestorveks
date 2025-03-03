import logo from "/images/logos/Cestor Veks-Logo-Vertical-Negativ.svg";
import './Hero.css'

function Hero () {

    return (
        <div className="hero-component" id="hero">
            <img src={logo} className="hero-logo" />
            <div className="hero-text">
                Energija za svetliju budućnost
            </div>
        </div>
    )
}

export default Hero;