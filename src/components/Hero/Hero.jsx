import logo from "/images/logos/Cestor Veks-Logo-Vertical-Negativ.svg";
import './Hero.css'
import { motion } from "framer-motion";

function Hero () {

    return (
        <div className="hero-component" id="hero">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }} viewport={{ once: true }} >
                <img src={logo} className="hero-logo" />
                <div className="hero-text">
                    Energija za svetliju budućnost
                </div>
            </motion.div>
        </div>
    )
}

export default Hero;