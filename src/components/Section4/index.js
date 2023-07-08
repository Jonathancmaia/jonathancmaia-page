import {useState, useEffect, createElement} from 'react';
import './style.css';

const Section4 = () => {
    const [response, setResponse] = useState(false);
    let uniqueUrls = [];

    useEffect(() => {
        fetch('https://api.github.com/users/jonathancmaia/repos')
        .then((response) => response.json())
        .then((json) => setResponse(json));
    },[]);


    return (
        <section id="section4">
            <h3>
                Projetos
            </h3>
            <div>
                { response ?
                    <div className="projectsHandler">
                        {response.map((p, i) => 
                            {
                                //Verify if a project has 2 repositories
                                if (p.homepage && !uniqueUrls[p.homepage]) {

                                    uniqueUrls[p.homepage] = {
                                            repositories: [{
                                            name: p.name,
                                            fullName: p.full_name
                                        }]
                                    };

                                    return (
                                        <div className="project" key={i}>
                                            <img src={
                                                'https://api.microlink.io/?url='+p.homepage+'&screenshot=true&embed=screenshot.url&waitForTiemout=3s'
                                            } alt={p.name} />

                                            <h2 id={p.homepage}>
                                                <a href={"https://github.com/"+p.full_name} target="_blank" rel="noreferrer" className="rgb" data={p.name+' * '}>
                                                    {p.name} <i className="bi bi-box-arrow-up-right"></i>
                                                </a>
                                            </h2>
                                            <p>{p.description}</p>
                                            <h3>
                                                <a
                                                    className="rgb"
                                                    href={p.homepage}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    data="Veja isso online"
                                                >
                                                    Veja isso online
                                                </a>
                                            </h3>
                                        </div>
                                    );

                                //if a project has 2 repositories just create a link and push this into projects card
                                } else if (p.homepage) {
                                    const a = document.createElement("a");
                                    a.setAttribute("href", "https://github.com/"+p.full_name);
                                    a.setAttribute("target", "_blank");
                                    a.setAttribute("rel", "noreferrer");
                                    a.setAttribute("class", "rgb");
                                    a.setAttribute("data", p.name+' * ');
                                    a.setAttribute("id", p.full_name);
                                    const aText = document.createTextNode(p.name+" ");
                                    
                                    const icon = document.createElement("i");
                                    icon.setAttribute("class", "bi bi-box-arrow-up-right");

                                    a.appendChild(aText);
                                    a.appendChild(icon);

                                    if (document.getElementById(p.homepage) !== null && !document.getElementById(p.full_name)) {
                                        document.getElementById(p.homepage).appendChild(a);
                                    }
                                }
                            }
                        )}
                    </div>
                        :
                    <div className="loading">
                        <i className="bi bi-cloud-download-fill  rgb-active" data="rgb"></i>
                    </div>
                }
            </div>
        </section>
    );
}

export default Section4;