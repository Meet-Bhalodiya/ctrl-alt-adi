const Footer = () => {
  return (
    <footer className="py-6 px-6 text-center text-slate">
      <div className="flex flex-col items-center">
        <p className="mb-2 text-sm">
          Designed & Built by Supriya Galbale
        </p>
        <a 
          href="https://github.com/supriyagalbale"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs hover:text-teal transition-colors font-mono"
        >
          @supriyagalbale
        </a>
      </div>
    </footer>
  );
};

export default Footer;
