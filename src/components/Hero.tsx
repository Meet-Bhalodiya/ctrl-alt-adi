import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section">
      <div className="animate-fade-in opacity-0" style={{animationDelay: '100ms'}}>
        <h1 className="text-teal font-mono mb-5">Hi, my name is</h1>
      </div>
      
      <div className="animate-fade-in opacity-0" style={{animationDelay: '200ms'}}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-light mb-2">
          Supriya Galbale.
        </h2>
      </div>
      
      <div className="animate-fade-in opacity-0" style={{animationDelay: '300ms'}}>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate mb-8">
          I build exceptional web experiences.
        </h3>
      </div>
      
      <div className="animate-fade-in opacity-0 max-w-xl" style={{animationDelay: '400ms'}}>
        <p className="text-slate mb-12">
          I'm a frontend engineer specializing in building high-performance, 
          accessible, and beautiful web applications. Currently, I'm focused on
          creating exceptional digital experiences at {' '}
          <a 
            href="https://www.goldmansachs.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal hover:underline"
          >
            Goldman Sachs
          </a>.
        </p>
      </div>
      
      <div className="animate-fade-in opacity-0" style={{animationDelay: '500ms'}}>
        <a href="#projects" className="btn group inline-flex items-center">
          Check out my work
          <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
