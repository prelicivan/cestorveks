import './Contact.css'
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div className="contact-component" >
                <motion.div className="contact-info" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }} viewport={{ once: true }}>
                    <h3>Kontaktirajte nas!</h3>
                    <p className='address'>Adresa: Jastrebačka br. 10, 37000 Kruševac</p>
                    <p className='telephone'>Broj telefona: 037/422-969</p>
                    <p className='email'>E-mail: gas@cestorveks.com</p>
                </motion.div>
                <div className="contact-form">
                    <h1>Ime i prezime:</h1>
                    <textarea className='name-area'/>
                    <h1>E-mail:</h1>
                    <textarea className='mail-area'/>
                    <h1>Tekst:</h1>
                    <textarea className='text-area'/>
                    <button onClick={() => sendEmail()}>Pošalji</button>
                </div>
        </div>
    )
}

export default Contact;