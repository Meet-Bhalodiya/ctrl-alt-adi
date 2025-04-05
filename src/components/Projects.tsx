
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Buy & Learn",
      description: "A web app that allows users to search for courses, navigate through options, add desired courses to a wishlist, purchase suitable ones, and begin learning seamlessly.",
      tech: ["TypeScript", "ReactJS", "Redux", "HTML", "SCSS"],
      links: {
        github: "https://github.com/supriyagalbale/buy-and-learn",
        external: "#"
      }
    },
    {
      title: "Weather Forecast",
      description: "Web application capable of displaying live weather details of more than 40,000 cities in the world with the help of OpenWeatherMap API.",
      tech: ["JavaScript", "ReactJS", "HTML", "CSS", "API"],
      links: {
        github: "https://github.com/supriyagalbale/weather-forecast",
        external: "#"
      }
    },
    {
      title: "Portfolio Website",
      description: "A responsive and interactive portfolio website showcasing my skills, experience, and projects. Built with a focus on clean design and smooth animations.",
      tech: ["ReactJS", "Tailwind CSS", "TypeScript", "Vite"],
      links: {
        github: "https://github.com/supriyagalbale/portfolio",
        external: "#"
      }
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="numbered-heading">Some Things I've Built</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-teal">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="flex space-x-3">
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate hover:text-teal transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.links.external && (
                  <a 
                    href={project.links.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate hover:text-teal transition-colors"
                    aria-label={`Live site for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <h3 className="text-slate-light text-xl font-medium mb-2">
              <a 
                href={project.links.external || project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal transition-colors"
              >
                {project.title}
              </a>
            </h3>
            
            <p className="text-slate mb-6">{project.description}</p>
            
            <div className="mt-auto">
              <ul className="tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i} className="before:content-none">
                    <span className="text-xs font-mono text-slate-light">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
