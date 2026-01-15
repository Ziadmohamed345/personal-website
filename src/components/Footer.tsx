import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                Ziad Abdelaal
              </div>
              <p className="text-muted-foreground text-sm">
                Software Engineer • Freelancer • Toastmasters Speaker
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Ziadmohamed345"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ziaddmohamedd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="http://www.fiverr.com/s/dDz90pG"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="Fiverr Profile"
              >
                <img src="/assets/fiverr-logo.svg" alt="Fiverr" className="w-5 h-5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </a>
              <a
                href="mailto:ziadmohamed345@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-border"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <span>© {currentYear} Ziad Abdelaal. Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#home"
                className="hover:text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Back to Top
              </a>
              <span className="text-xs opacity-60">Available for hire</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
