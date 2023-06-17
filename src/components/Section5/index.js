import { motion } from "framer-motion";
import './style.css';

const Section5 = () => {

    return (
        <motion.section
            id="section5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 , transition: { duration: 1.5}}}
        >
            <h3>
                Contatos
            </h3>
            <div id="socialHandler">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <i className="bi bi-linkedin rgb" data="***"></i>
                    <div>
                        <h4>
                            Linkedin
                        </h4>
                        <p>
                            <a href="https://www.linkedin.com/in/jonathan-antonio-cavalcanti-maia-658716145/" target="_blank" rel="noreferrer">in/jonathan-antonio-cavalcanti-maia-658716145</a>
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <i className="bi bi-github rgb" data="***"></i>
                    <div>
                        <h4>
                            GitHub
                        </h4>
                        <p>
                            <a href="https://github.com/Jonathancmaia" target="_blank" rel="noreferrer">github.com/Jonathancmaia</a>
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <i className="bi bi-whatsapp rgb" data="***"></i>
                    <div>
                        <h4>
                            WhatsApp
                        </h4>
                        <p>
                            <a href="https://wa.me/+55021980892433" target="_blank" rel="noreferrer">wa.me/+55021980892433</a>
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <i className="bi bi-envelope-at rgb" data="***"></i>
                    <div>
                        <h4>
                            E-mail
                        </h4>
                        <p>
                            <a href="mailto:jonathancmaia@gmail.com" target="_blank" rel="noreferrer">jonathancmaia@gmail.com</a>
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <i className="bi bi-phone rgb" data="***"></i>
                    <div>
                        <h4>
                            Telefone
                        </h4>
                        <p>
                            <a href="tel:+5521980892433" target="_blank" rel="noreferrer">+55 (021) 9 8089-2433</a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Section5;