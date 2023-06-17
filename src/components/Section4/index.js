import {useState, useEffect} from 'react';
import './style.css';

const Section4 = () => {
    const [response, setResponse] = useState(false);

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
                                if (p.homepage) {
                                    return (
                                        <div className="project" key={i}>
                                            <img src={
                                                'https://api.microlink.io/?url='+p.homepage+'&screenshot=true&embed=screenshot.url&waitForTiemout=3s'
                                            } alt={p.name} />
                                            <h2>
                                                <a href={"https://github.com/"+p.full_name} target="_blank" rel="noreferrer" className="rgb" data={p.name+' * '}>
                                                    {p.name} <i class="bi bi-box-arrow-up-right"></i>
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
                                    )
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