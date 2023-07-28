import { motion } from "framer-motion";
import './style.css';

const Section5 = () => {

    return (
        <motion.section
            id="section5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 , transition: { duration: 1.5}}}
        >
            <h3 className="title" data="Contatos">
                Contatos
            </h3>
            <div id="socialHandler">
                <a href="https://www.linkedin.com/in/jonathan-antonio-cavalcanti-maia-658716145/" target="_blank" rel="noreferrer">
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
                            in/jonathan-antonio-cavalcanti-maia-658716145
                        </p>
                    </div>
                </motion.div>
                </a>
                <a href="https://github.com/Jonathancmaia" target="_blank" rel="noreferrer">
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
                                github.com/Jonathancmaia
                            </p>
                        </div>
                    </motion.div>
                </a>
                <a href="https://wa.me/+55021980892433" target="_blank" rel="noreferrer">
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
                                wa.me/+55021980892433
                            </p>
                        </div>
                    </motion.div>
                </a>
                <a href="mailto:jonathancmaia@gmail.com" target="_blank" rel="noreferrer">
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
                                jonathancmaia@gmail.com
                            </p>
                        </div>
                    </motion.div>
                </a>
                <a href="tel:+5521980892433" target="_blank" rel="noreferrer">
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
                                +55 (021) 9 8089-2433
                            </p>
                        </div>
                    </motion.div>
                </a>
            </div>
        </motion.section>
    );
}

export default Section5;