import React, { useEffect, useRef } from "react";
import { SectionWrapper } from '../hoc'


const Documentation = () => {
    const logosRef = useRef(null);

    useEffect(() => {
        const ul = logosRef.current;
        if(ul) {
            const clone = ul.cloneNode(true);
            ul.parentNode.insertBefore(clone, ul.nextSibling);
            clone.setAttribute('aria-hidden', 'true')
        }
    }, [])
    return (
        <>
            <div className="w-full max-w-7xl h-full py-20 bg-white text-black">
                <h2 className="text-black text-xl text-left pl-2">Documentation</h2>
                <p className="text-left pl-4">This is an example end-to-end project to develop a process and the necessary tools to support
                    retrieving, processing, publishing and presentation of the data to understand the economic outlook
                    based on Buffets Indicator rule.</p>
                <h3 id="getting-started" className="py-2 pt-6 text-black text-xl text-left pl-2">Getting Started</h3>
                <p className="text-left py-4 pl-4">This tooling includes a Docker Compose file, as well as several Dockerfile definition files. If using
                    these containers to run this project, you should not need to install anything.
                    Where needed, I will note any credentials and/or signup&#39;s necessary to achieve the project
                    results.</p>
                <p>The overarching process that this tool will follow can be seen in the flowchart below.</p>
                <p>The architectural design can be found below</p>
                <h1 id="usage">Usage</h1>
                <p>To run the complete stack, execute the following command from a terminal in the top-level project
                    directory.</p>
                <pre><code className="lang-shell"><span className="hljs-attribute">docker compose up</span>
</code></pre>
                <h2 id="troubleshooting">Troubleshooting</h2>
                <p>Notes regarding troubleshooting will be logged here</p>
                <h3 id="frontend-built-with" className="py-2 pt-6 text-black text-xl text-left pl-2">Developed using</h3>
                <div className="w-full py-12 px-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <ul ref={logosRef} className="animate-infinite-scroll flex inline-flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                        <li>
                            <a href="https://reactjs.org/" target="_blank">
                                <img
                                    src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=ffffff"
                                    alt="React"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com" target="_blank">
                                <img
                                    src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Tailwind+CSS&amp;color=000000&amp;logo=Tailwind+CSS&amp;logoColor=ffffff&amp;label="
                                    alt="TailwindCSS"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://vitejs.dev/guide/" target="_blank">
                                <img
                                    src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Vite&amp;color=000000&amp;logo=Vite&amp;logoColor=FFFFFF&amp;label="
                                    alt="ViteJS"
                                />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.python.org">
                                <img
                                    src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Python&amp;color=000000&amp;logo=Python&amp;logoColor=FFFFFF&amp;label="
                                    alt="Python"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://fastapi.tiangolo.com">
                                <img
                                    src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=FastAPI&amp;color=000000&amp;logo=FastAPI&amp;logoColor=FFFFFF&amp;label="
                                    alt="FastAPI"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.pytest.org/en/8.0.x/">
                                <img
                                    src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Pytest&amp;color=000000&amp;logo=Pytest&amp;logoColor=FFFFFF&amp;label="
                                    alt="PyTest"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sqlalchemy.org">
                                <img
                                    src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=SQLAlchemy&amp;color=000000&amp;logo=SQLAlchemy&amp;logoColor=FFFFFF&amp;label="
                                    alt="SQLAlchemy"
                                />
                            </a>
                        </li>



                        <li>
                            <a href="https://github.com">
                                <img
                                    src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=GitHub&amp;color=000000&amp;logo=GitHub&amp;logoColor=FFFFFF&amp;label="
                                    alt="GitHub"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.docker.com/" target="_blank">
                                <img
                                    src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Docker&amp;color=000000&amp;logo=Docker&amp;logoColor=FFFFFF&amp;label="
                                    alt="Docker"
                                />
                            </a>
                        </li>
                        <li><a href="https://www.postgresql.org"><img
                            src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=PostgreSQL&amp;color=000000&amp;logo=PostgreSQL&amp;logoColor=FFFFFF&amp;label="
                            alt="PostgreSQL"/></a></li>
                        <li><a href="https://www.jetbrains.com/pycharm/"><img
                            src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=PyCharm&amp;color=000000&amp;logo=PyCharm&amp;logoColor=FFFFFF&amp;label="
                            alt="PyCharm"/></a></li>
                        <li><a href="https://www.jetbrains.com/webstorm/"><img
                            src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=WebStorm&amp;color=000000&amp;logo=WebStorm&amp;logoColor=FFFFFF&amp;label="
                            alt="WebStorm"/></a></li>
                    </ul>


                </div>

            </div>
        </>
    )
}


export default SectionWrapper (Documentation, "docs")