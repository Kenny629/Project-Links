import { useState } from "react";
import { reactProjects } from "./data";

const ReactProjects = () => {
  const [projects, setProjects] = useState(reactProjects);
  return (
    <section>
      <div className="main-title">
        <h2 className="title">React Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="section-center">
        {projects.map((project) => {
          const { id, img, title, url } = project;

          return (
            <article key={id} className="item-container">
              <a href={url} target="blank">
                <img className="img" src={img} alt={title} />
                <h4>{title}</h4>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default ReactProjects;
