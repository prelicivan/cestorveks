import React from 'react'
import './About.css'
import { motion } from 'framer-motion';

function About({
    whiteFont,
    headline,
    text1,
    text2,
    img
}) {
    return(
        <div className="about-us-component" id="about"> 
            <h2>O nama</h2>
            <motion.div className="about-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }} viewport={{ once: true }} >
                <p>Firma CESTOR-VEKS doo je osnovana 2003. Godine sa sedistem u Krusevcu. Od 2012.godine poseduje licencu za obavljanje energetske delatnosti snabdevanje prirodnim gasom, sa rokom vazenja licence od 10 godina.</p>
                <p>Usvajanjem novog Zakona o energetici 2014 godine, svi krajnji kupci prirodnog gasa imaju pravo da slobodno biraju svog snabdevaca na trzistu pocevsi od 1. Januara 2015. Godine. Kupci koji nemaju pravo na javno snabdevanje kupuju prirodni gas od licenciranih snabdevaca na slobodnom trzistu.</p>
            </motion.div>
        </div>
    )
}

export default About;