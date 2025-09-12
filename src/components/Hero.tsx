import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I'm Ziad Mohamed,\na Software Developer";
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    let lastTime = performance.now();
    const type = (now: number) => {
      if (now - lastTime > 40) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        lastTime = now;
      }
      if (i <= fullText.length) {
        requestAnimationFrame(type);
      } else {
        setDone(true);
      }
    };
    requestAnimationFrame(type);
    return () => {};
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span
                className="block text-foreground max-w-xl mx-auto whitespace-pre-line"
                style={{ minHeight: "2.4em" }}
              >
                <span className="text-5xl md:text-7xl">
                  {done ? (
                    <>
                      <span>I'm Ziad Mohamed,</span>
                      <br />
                      <span>a Software Developer</span>
                    </>
                  ) : (
                    typedText
                  )}
                  <span className="animate-pulse">
                    {!done && typedText.length < fullText.length ? "|" : ""}
                  </span>
                </span>
              </span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight pb-2">
                Busy Creating a life I love.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed lg:mx-0">
              I’m passionate about creating meaningful projects, growing through
              new challenges, and building a journey I’m proud of.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("#projects")}
              >
                View My Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/Ziadmohamed345"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/ziaddmohamedd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:ziadmohamed345@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            <img
              src="/assets/PP.jpg"
              alt="Profile"
              className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-primary"
            />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
