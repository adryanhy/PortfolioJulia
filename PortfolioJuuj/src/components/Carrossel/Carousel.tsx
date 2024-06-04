
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const ProjectCarousel = ({ projects }) => {
  return (
    <Carousel showThumbs={false}>
      {projects.map((project, index) => (
        <div key={index} className="carousel-item">
          <img src={project.mainImage} alt={project.title} className="main-image" />
          <div className="project-info">
            <img src={project.photo} alt={project.architect} className="architect-photo" />
            <h3>{project.title}</h3>
            <p>{project.architect}</p>
            <button className="see-more-button" onClick={() => window.location.href = project.link}>
              Ver mais
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
