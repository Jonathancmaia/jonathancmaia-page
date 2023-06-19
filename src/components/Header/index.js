import "./style.css";
const Header = () => {
  const navbar = document.getElementById("collapse-navbar");

  //Function where do link function to navbar items
  const handleClick = (e) => {
    window.scrollTo({
      top:
        document.getElementById(e.target.getAttribute("to")).offsetTop - 6 * 16,
      behavior: "smooth",
    });
  };

  //Function where expands ans contracts navbar
  const handleExpand = () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      navbar.classList.add("inactive");
    } else {
      navbar.classList.remove("inactive");
      navbar.classList.add("active");
    }
  };

  //Reset navbar status on resize
  window.addEventListener("resize", function () {
    if (window.innerWidth < 576) {
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
      } else if (navbar.classList.contains("inactive")) {
        navbar.classList.remove("inactive");
      }
    }
  });

  return (
    <header>
      <h2
        className="rgb"
        data="Jonathancmaia"
        to="section1"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Jonathancmaia
      </h2>
      <ul id="collapse-navbar">
        <li
          to="section2"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Sobre mim
        </li>
        <li
          to="section3"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Habilidades
        </li>
        <li
          to="section4"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Projetos
        </li>
        <li
          to="section5"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Contato
        </li>
      </ul>
      <i
        className="bi bi-menu-down collapse-button rgb"
        data="rgb"
        onClick={() => {
          handleExpand();
        }}
      ></i>
    </header>
  );
};

export default Header;
