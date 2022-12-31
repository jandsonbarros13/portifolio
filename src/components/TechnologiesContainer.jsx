import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import {SiTypescript} from "react-icons/si"

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, hab: "Habilidade na linguagem de marcação desde 2018 com projeos desenvolvidos apenas com HTML e CSS." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, hab: 'Habilidade com a linguagem de estilização desde 2018, trabalhando principalmente com styled components e flexbox.' },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, hab: 'Habilidades em javascript desde 2018, incluindo o DOM e Callback functions.' },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, hab: 'Habilidades em Node e back-end desde 2021, principalmente com express e o Nodemon.'},
  { id: "type", name: "Typescript", icon: <SiTypescript />, hab: 'Habilidades com Type desde 2020, utilizando principalmente no react e no next.' },
  { id: "react", name: "React", icon: <DiReact />, hab: 'Principal linguagem trabalhada, habilidades em desenolvimento tanto web quanto mobile trabalhos com redux e no router-dom'},
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.hab}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
