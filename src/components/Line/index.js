import { useScroll } from "framer-motion";
import './style.css';

const Line = () => {

    const { scrollYProgress } = useScroll();

    window.onscroll = ()=>{
        document.getElementById("line").style.height = (30 + Math.ceil(scrollYProgress.current*100)/1.4) + "%";
        document.getElementById("lineBright").style.height = (30 + Math.ceil(scrollYProgress.current*100)/1.4) + "%";

        let titles = document.getElementsByClassName("title");

        for(let i = 0; i < titles.length; i++){
            if(
                Math.ceil(titles[i].getBoundingClientRect().bottom)
                    <=
                Math.ceil(document.getElementById("line").getBoundingClientRect().bottom)
            ){
                if(!titles[i].classList.contains('title-active') && window.innerWidth > 991){
                    titles[i].classList.add('title-active');

                    let icon = document.createElement("div");
                    let preTitle = document.createElement("div");
                    let preTitleBright = document.createElement("div");

                    preTitle.classList.add("preTitle");
                    preTitleBright.classList.add("preTitleBright");
                    icon.classList.add("icon");

                    preTitle.setAttribute("id", "title"+i);
                    preTitleBright.setAttribute("id", "titleBright"+i);
                    icon.setAttribute("id","icon"+i);

                    titles[i].after(preTitle);
                    preTitle.after(preTitleBright);
                    preTitle.after(icon);
                }
            } else {
                if(titles[i].classList.contains('title-active')){

                    titles[i].classList.remove('title-active');

                    //dispatch rgb line from document
                    document.getElementById("title"+i).classList.add("closeLine");
                    document.getElementById("title"+i).addEventListener('transitionend', (e)=>{
                        if (e.propertyName === 'transform') {
                            document.getElementById("title"+i).remove();
                          }
                    });

                    //dispatch rgb bright from document
                    document.getElementById("titleBright"+i).classList.add("closeLine");
                    document.getElementById("titleBright"+i).addEventListener('transitionend', (e)=>{
                        if (e.propertyName === 'transform') {
                            document.getElementById("titleBright"+i).remove();
                          }
                    });

                    //dispatch icons from document
                    document.getElementById("icon"+i).classList.add("closeIcon");
                    document.getElementById("icon"+i).addEventListener("transitionend", (e)=>{
                        if (e.propertyName === 'transform') {
                            document.getElementById("icon"+i).remove();
                          }
                    });
                    
                }
            }
        }
        
    }
    
    return (
        <>
            <div id="line"></div>
            <div id="lineBright" className="rgbLines"></div>
        </>
    );
}

export default Line;