import { motion } from "framer-motion";
import './style.css';

const Section2 = () => {
    return (
        <motion.section
            id="section2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 , transition: { duration: 1.5}}}
        >
            <h3>
                Sobre mim
            </h3>
            <p>
                Meu nome é Jonathan Maia, tenho {Math.floor( (Date.now()-new Date("1996-12-25")) / (1000 * 60 * 60 * 24 * 365))} anos e sou um desenvolvedor web apaixonado por criar soluções digitais que ofereçam valor real para os usuários. Atualmente, estou sempre em busca de dominar novas tecnologias e aplicá-las de forma eficiente em meus projetos.
            </p>
        </motion.section>
    );
}

export default Section2;