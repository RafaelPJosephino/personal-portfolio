import React from 'react';
import projectsData from '../assets/projects.json'; 
import './Projects.css';
import Slider from 'react-slick';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true, 
    responsive: [
      {
        breakpoint: 1440, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
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
