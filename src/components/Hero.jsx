import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hola, soy <span>Anastasio</span></h1>
          <p>
            Desarrollador web especializado en Back-end Java y microservicios. 
            Me apasiona afrontar nuevas experiencias desafiantes e innovadoras.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary">Contactar</a>
            <a href="#projects" className="btn btn-secondary">Ver Proyectos</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/AnastasioNieves" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/anastasio-nieves-muñoz" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/rsc/foto.png" alt="Anastasio Nieves" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
