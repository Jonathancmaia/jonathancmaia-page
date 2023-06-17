import { motion } from "framer-motion";
import './style.css';

const Section3 = () => {

    let interval;

    //Scroll div function
    const rollCarousel = (x) => {
        const habilitiesHandler = document.getElementById('habilitiesHandler');
        if (x === 'left'){
            habilitiesHandler.scrollTo({
                left: habilitiesHandler.scrollLeft - 25
            });
        } else if (x === 'right') {
            habilitiesHandler.scrollTo({
                left: habilitiesHandler.scrollLeft + 25
            });
        }
    };

    const clickScroll = (x) => {
        interval = setInterval(() => rollCarousel(x), 10);
    };

    //scroll div function (drag)
    var dragging = false;
    var start;
    var scrollLeft;

    function startDrag(event) {
        const habilitiesHandler = document.getElementById('habilitiesHandler');
        if (event.button === 0 && !dragging) {
            dragging = true;
            start = event.pageX;
            scrollLeft = habilitiesHandler.scrollLeft;
        }
    }

    function stopDrag() {
        dragging = false;
    }

    function drag(event) {
        const habilitiesHandler = document.getElementById('habilitiesHandler');
        if (dragging) {
            var scroll = start - event.pageX;
            habilitiesHandler.scrollLeft = scrollLeft + scroll;
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 , transition: { duration: 1.5}}}
            id="section3"
        >
            <h3>
                Principais ferramentas
            </h3>
            <div>
                <i className="bi bi-arrow-left-square rgb" id="buttonLeft" data="rgb"
                    onClick={(e)=>{
                        rollCarousel('left')
                    }}

                    onMouseDown={(e)=>{
                        clickScroll('left');
                    }}

                    onMouseUp={
                        (e)=>{
                            clearInterval(interval)
                    }}
                ></i>
                <div id="habilitiesHandler" onMouseDown={(e)=>startDrag(e)} onMouseUp={(e)=>stopDrag(e)} onMouseMove={(e)=>{drag(e)}}>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-html5-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-css3-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-javascript-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-nodejs-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-php-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-laravel-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-react-original rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-mysql-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-ubuntu-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-vuejs-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-amazonwebservices-original rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-bootstrap-plain rgb"  data="rgb"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <i className="devicon-tailwindcss-original-wordmark rgb"  data="rgb"></i>
                    </motion.div>
                </div>
                <i className="bi bi-arrow-right-square rgb" id="buttonRight" data="rgb"
                    onClick={(e)=>{
                        rollCarousel('right')
                    }}

                    onMouseDown={(e)=>{
                        clickScroll('right');
                    }}

                    onMouseUp={
                        (e)=>{
                            clearInterval(interval)
                    }}
                ></i>
            </div>
        </motion.section>
    );
}

export default Section3;