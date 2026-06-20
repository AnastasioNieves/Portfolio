const projectsData = [
  {
    title: 'FmPro',
    description: 'Aplicación para entrenadores basada en Spring y React.',
    image: '/rsc/fmpro.png',
    demoUrl: 'https://github.com/AnastasioNieves/fmpro',
    codeUrl: 'https://github.com/AnastasioNieves/fmpro'
  },
  {
    title: 'CineData2',
    description: 'Una app sencilla de búsqueda de películas con JS.',
    image: '/rsc/cinedata.png',
    demoUrl: 'https://github.com/AnastasioNieves/cineData2',
    codeUrl: 'https://github.com/AnastasioNieves/cineData2'
  },
  {
    title: 'Modulo2',
    description: 'Una API con un pequeño front para la gestión de una academia.',
    image: '/rsc/modulo2.png',
    demoUrl: 'https://github.com/AnastasioNieves/Modulo2',
    codeUrl: 'https://github.com/AnastasioNieves/Modulo2'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Mis <span>Proyectos</span></h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <article key={index} className="project-card glass">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver Código</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
