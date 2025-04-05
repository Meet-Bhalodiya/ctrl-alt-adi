
const Skills = () => {
  const skillCategories = [
    {
      title: "Libraries & Frameworks",
      skills: [
        "ReactJS", "Redux", "HTML", "HTML5", "CSS", "CSS3", "SCSS", 
        "Redux-Saga", "Bootstrap", "Material UI", "Babel", "Tailwind CSS", 
        "Ant Design", "Jest", "React Testing Library", "Cypress", "Webpack", 
        "Vite", "Parcel", "Express.Js"
      ]
    },
    {
      title: "Programming Languages",
      skills: ["Javascript", "Typescript", "C", "C++", "Python"]
    },
    {
      title: "Miscellaneous",
      skills: [
        "Storybook", "Agile methodologies", "Object oriented programming (OOPs)", 
        "Design patterns", "REST API Integration", "GraphQL", 
        "Version control (Git, Github, Gitlab)"
      ]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      title: "Tools",
      skills: ["Figma", "Postman", "JIRA", "Confluence", "Trello"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="numbered-heading">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="experience-card" 
          >
            <h3 className="text-slate-light text-lg font-medium mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="inline-block px-3 py-1 text-xs font-mono text-teal 
                            bg-navy-dark rounded-full border border-teal/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
