import './style.css';
const Header = () => {

    const handleClick = (e) => {

        window.scrollTo({
            top:
                document.getElementById(
                    e.target.getAttribute("to")
                ).offsetTop - 6 * 16,
            behavior: "smooth",
        });
    }
    
    return (
        <header>
            <h2 className="rgb" data="Jonathancmaia" to="section1" onClick={(e)=>{handleClick(e)}}>
                Jonathancmaia
            </h2>
            <ul>
                <li className="rgb" data="Sobre mim" to="section2" onClick={(e)=>{handleClick(e)}}>Sobre mim</li>
                <li className="rgb" data="Habilidades" to="section3" onClick={(e)=>{handleClick(e)}}>Habilidades</li>
                <li className="rgb" data="Projetos" to="section4" onClick={(e)=>{handleClick(e)}}>Projetos</li>
                <li className="rgb" data="Contato" to="section5" onClick={(e)=>{handleClick(e)}}>Contato</li>
            </ul>
            
        </header>
    );
}

export default Header;