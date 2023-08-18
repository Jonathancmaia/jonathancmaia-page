import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";

const Section4 = () => {
  const [response, setResponse] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/jonathancmaia/repos")
      .then((response) => response.json())
      .then((json) => {
        let uniqueUrls = [];

        json.map((p, i) => {
          if (!uniqueUrls.includes(p.homepage)) {
            uniqueUrls.push(p.homepage);
            json[i].homepage = [
              { homepage: p.homepage, full_name: p.full_name, name: p.name },
            ];
          } else {
            let pIndex = uniqueUrls.indexOf(p.homepage);
            json[pIndex].homepage = [
              ...json[pIndex].homepage,
              { homepage: p.homepage, full_name: p.full_name, name: p.name },
            ];
          }
        });

        setResponse(json);
      });
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
        {response ? (
          <div className="projectsHandler">
            {response.map((p, i) => {
              //Verify if a project has 2 repositories
              if (p.homepage[0].homepage) {
                return (
                  <div className="project" key={i}>
                    <img
                      src={
                        "https://api.microlink.io/?url=" +
                        p.homepage[0].homepage +
                        "&screenshot=true&embed=screenshot.url&waitForTiemout=3s"
                      }
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
              }
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
