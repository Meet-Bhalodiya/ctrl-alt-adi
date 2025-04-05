
import { useState } from 'react';

const Experience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  
  const experienceData = [
    {
      company: "Goldman Sachs",
      title: "Frontend Engineer",
      duration: "January 2024 - Present",
      location: "Bengaluru, India",
      responsibilities: [
        "End-to-end feature development and requirement gathering with architects and PMs for a digital loan web application.",
        "Supervised a team of 6 developers, handling project management tasks, creating low-level designs, including technical discussions and performing code reviews to ensure seamless project delivery.",
        "Optimized build performance by migrating the project from Webpack to Vite, achieving approx 35% reduction in pipeline execution time.",
        "Contributed to the firmwide internal user interface (UI) library by developing robust React components, enabling consistent reusable solutions across internal projects.",
        "Conducted high-quality knowledge-sharing sessions which helped team members improve their understanding of fundamentals of engineering concepts and React.",
        "Contributed to the hiring process for frontend developer roles by conducting 30+ interviews within one year."
      ],
      tech: "ReactJS, Redux, Typescript, Webpack, Vite, HTML, CSS"
    },
    {
      company: "Deloitte (Hashedin)",
      positions: [
        {
          title: "Software Engineer II",
          duration: "April 2023 - January 2024",
          responsibilities: [
            "Developed reusable React components for client products using client's design system and used React storybook library for documentation.",
            "Development, Code maintenance, Code reviews, and Testing.",
            "Trained 60+ new joiners and interns."
          ]
        },
        {
          title: "Software Engineer I",
          duration: "July 2021 - March 2023",
          responsibilities: [
            "Contributed to the firm's internal product to organize and automate the hiring process using ReactJS, Redux, and Redux Saga.",
            "Designed and developed end-to-end features for efficient data handling and management, improving hiring processes and boosting HR efficiency by 50%."
          ]
        },
        {
          title: "Software Engineer Intern",
          duration: "March 2021 - June 2021",
          responsibilities: [
            "Developed progressive web application (PWA) using ReactJS and Redux for food recommendation system where users can make diet charts, track calories, order the recommended food item from restaurants or buy the required ingredients."
          ]
        }
      ],
      location: "Bengaluru, India",
      tech: "ReactJS, Redux, Redux-Saga, Jest, Storybook, HTML, CSS"
    },
    {
      company: "Coding Ninjas",
      title: "Teaching Assistant",
      duration: "September 2020 - January 2021",
      location: "Remote",
      responsibilities: [
        "C++, Data Structures & Algorithms, HTML, CSS, ReactJS and Redux teaching assistant.",
        "Cleared the doubts of over 550 students and assisted them in coding."
      ],
      tech: "C++, DSA, ReactJS, Redux, HTML, CSS"
    }
  ];
  
  return (
    <section id="experience" className="section">
      <h2 className="numbered-heading">Where I've Worked</h2>
      
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Tabs */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:min-w-[200px]">
          {experienceData.map((experience, index) => (
            <button
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className={`whitespace-nowrap px-5 py-3 border-b-2 lg:border-b-0 lg:border-l-2 text-sm font-mono transition-all ${
                activeTabIndex === index
                  ? 'text-teal border-teal bg-navy-light lg:bg-navy-light/50'
                  : 'text-slate border-slate-dark hover:text-teal hover:bg-navy-light/30'
              }`}
            >
              {experience.company}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-h-[300px]">
          {experienceData.map((experience, index) => (
            <div 
              key={index} 
              className={`space-y-6 transform transition-all duration-300 ${
                activeTabIndex === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 absolute -translate-y-5'
              }`}
              style={{ display: activeTabIndex === index ? 'block' : 'none' }}
            >
              {experience.positions ? (
                // Deloitte with multiple positions
                <div>
                  {experience.positions.map((position, posIndex) => (
                    <div key={posIndex} className={posIndex > 0 ? "mt-8" : ""}>
                      <h3 className="text-xl text-slate-light font-medium">
                        {position.title}{' '}
                        <span className="text-teal">@ {experience.company}</span>
                      </h3>
                      
                      <p className="font-mono text-sm text-slate mt-2">
                        {position.duration} | {experience.location}
                      </p>
                      
                      <ul className="space-y-3 mt-4">
                        {position.responsibilities.map((item, i) => (
                          <li key={i} className="flex">
                            <span className="text-teal mr-2">▹</span>
                            <span className="text-slate flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {posIndex === experience.positions.length - 1 && (
                        <p className="text-slate mt-4">
                          <span className="text-teal font-mono text-sm">Tech Stack:</span>{' '}
                          {experience.tech}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Regular company with single position
                <>
                  <h3 className="text-xl text-slate-light font-medium">
                    {experience.title}{' '}
                    <span className="text-teal">@ {experience.company}</span>
                  </h3>
                  
                  <p className="font-mono text-sm text-slate">
                    {experience.duration} | {experience.location}
                  </p>
                  
                  <ul className="space-y-3">
                    {experience.responsibilities.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="text-teal mr-2">▹</span>
                        <span className="text-slate flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-slate">
                    <span className="text-teal font-mono text-sm">Tech Stack:</span>{' '}
                    {experience.tech}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
