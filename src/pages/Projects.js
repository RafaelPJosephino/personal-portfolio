// Projects.js
import React from 'react';
import projectsData from '../assets/projects.json'; // Certifique-se de que o caminho esteja correto
import './Projects.css';
import Slider from 'react-slick';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Exibir até 3 projetos
    slidesToScroll: 1,
    centerMode: true, // Para melhor espaçamento
    responsive: [
      {
        breakpoint: 768, // Para telas menores que 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <Slider {...settings}>
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">View Repository</a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Project</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
