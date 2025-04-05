
import { Github, ExternalLink, Code2, Cloud, Layout } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Buy & Learn",
      description: "A web app that allows users to search for courses, navigate through options, add desired courses to a wishlist, purchase suitable ones, and begin learning seamlessly.",
      tech: ["TypeScript", "ReactJS", "Redux", "HTML", "SCSS"],
      links: {
        github: "https://github.com/supriyagalbale/buy-and-learn",
        external: "#"
      },
      icon: <Code2 size={40} strokeWidth={1} />
    },
    {
      title: "Weather Forecast",
      description: "Web application capable of displaying live weather details of more than 40,000 cities in the world with the help of OpenWeatherMap API.",
      tech: ["JavaScript", "ReactJS", "HTML", "CSS", "API"],
      links: {
        github: "https://github.com/supriyagalbale/weather-forecast",
        external: "#"
      },
      icon: <Cloud size={40} strokeWidth={1} />
    },
    {
      title: "Portfolio Website",
      description: "A responsive and interactive portfolio website showcasing my skills, experience, and projects. Built with a focus on clean design and smooth animations.",
      tech: ["ReactJS", "Tailwind CSS", "TypeScript", "Vite"],
      links: {
        github: "https://github.com/supriyagalbale/portfolio",
        external: "#"
      },
      icon: <Layout size={40} strokeWidth={1} />
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
                {project.icon}
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
