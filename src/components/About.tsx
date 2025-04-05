const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="numbered-heading">About Me</h2>
      
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-slate">
          <p>
            Hello! I'm Supriya, a frontend engineer with over 4 years of 
            experience building exceptional digital experiences. I enjoy combining 
            my keen eye for frontend design with a strong foundation in Data 
            Structures and Algorithms (DSA) and System design.
          </p>
          
          <p>
            My journey began at <span className="highlight">Deloitte (Hashedin)</span> where 
            I worked on developing reusable React components and contributing to 
            the firm's internal product for automating the hiring process.
          </p>
          
          <p>
            Now at <span className="highlight">Goldman Sachs</span>, I'm working on 
            end-to-end feature development for a digital loan web application, 
            supervising a team of developers, and contributing to the firmwide 
            internal user interface library.
          </p>
          
          <p>
            I'm dedicated to writing clean, maintainable code and committed to 
            continuous improvement, always adhering to the Boy Scout rule: "Leave 
            the code better than you found it."
          </p>
          
          <p>Here are a few technologies I've been working with recently:</p>
          
          <ul className="tech-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML & CSS</li>
            <li>Tailwind CSS</li>
            <li>Webpack</li>
            <li>Vite</li>
            <li>Jest</li>
            <li>React Testing Library</li>
          </ul>
        </div>
        
        <div className="relative mx-auto">
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-md overflow-hidden border-2 border-teal">
            <div className="absolute inset-0 bg-teal opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=500&fit=crop&q=80" 
              alt="Supriya Galbale" 
              className="object-cover w-full h-full mix-blend-multiply filter grayscale contrast-100 brightness-90"
            />
          </div>
          <div className="absolute inset-0 border-2 border-teal rounded-md -z-10 translate-x-5 translate-y-5"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
