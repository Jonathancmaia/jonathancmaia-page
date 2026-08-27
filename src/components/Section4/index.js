import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";

const Section4 = () => {
  const [response, setResponse] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/jonathancmaia/repos?per_page=100")
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub API error: " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        const groups = new Map();

        json
          .filter(
            (p) =>
              p.owner &&
              p.owner.login.toLowerCase() === "jonathancmaia" &&
              p.homepage &&
              p.homepage.toString().trim() !== ""
          )
          .forEach((p) => {
            const key = p.homepage;
            if (!groups.has(key)) {
              groups.set(key, {
                name: p.name,
                description: p.description,
                homepage: [
                  {
                    homepage: p.homepage,
                    full_name: p.full_name,
                    name: p.name,
                  },
                ],
              });
            } else {
              groups.get(key).homepage.push({
                homepage: p.homepage,
                full_name: p.full_name,
                name: p.name,
              });
            }
          });

        setResponse(Array.from(groups.values()));
      })
      .catch(() => setError(true));
  }, []);

  return (
    <motion.section
      id="section4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
    >
      <h3 className="title" data="Projetos">
        Projetos
      </h3>
      <div>
        {error ? (
          <div className="loading">Não foi possível carregar os projetos.</div>
        ) : response ? (
          <div className="projectsHandler">
            {response.map((p, i) => {
              return (
                <div className="project" key={i}>
                  <img
                    src={
                      "https://api.microlink.io/?url=" +
                      p.homepage[0].homepage +
                      "&screenshot=true&embed=screenshot.url&waitForTiemout=3s"
                    }
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    alt={p.name}
                  />

                  {p.homepage.map((link, i) => (
                    <h2 key={i}>
                      <a
                        href={"https://github.com/" + link.full_name}
                        target="_blank"
                        rel="noreferrer"
                        className="rgb"
                        data={link.name + " * "}
                      >
                        {link.name}{" "}
                        <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    </h2>
                  ))}

                  <p>{p.description}</p>
                  <h3>
                    <a
                      className="rgb"
                      href={p.homepage[0].homepage}
                      target="_blank"
                      rel="noreferrer"
                      data="Veja isso online"
                    >
                      Veja isso online
                    </a>
                  </h3>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loading">
            <i className="bi bi-cloud-download-fill  rgb-active" data="rgb"></i>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Section4;