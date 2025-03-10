import logo from "/images/logos/Cestor Veks-Logo-Vertical-Negativ.svg";
import './Hero.css'
import { motion } from "framer-motion";

function Hero () {

    return (
        <div className="hero-component" id="hero">
            <div className="hero-content"  >
                <img src={logo} className="hero-logo" />
                <motion.div className="hero-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }} viewport={{ once: true }}>
                    Energija za svetliju budućnost
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;