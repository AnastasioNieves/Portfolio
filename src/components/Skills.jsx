import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiSpringboot, SiAngular } from 'react-icons/si';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'SpringBoot', icon: <SiSpringboot /> },
  { name: 'Angular', icon: <SiAngular /> },
  { name: 'Liferay', icon: <FaCode /> },
  { name: 'Git', icon: <FaGitAlt /> }
];

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Mis <span>Habilidades</span></h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card glass">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
