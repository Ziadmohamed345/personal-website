import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Monitor } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "arabni",
      title: "Arabni MaaS App",
      description:
        "A Mobility-as-a-Service app that integrates different transportation options into one platform for a seamless travel experience across Cairo.",
      role: "Team Leader & Developer",
      type: "Mobile Application",
      icon: Smartphone,
      technologies: [
        "Flutter",
        "Firebase",
        "Jupyter",
        "Python",
        "Figma",
        "GitHub",
        "Slack",
        "Jira",
      ],
      liveUrl: "https://arabni-project-showecase-yby7.vercel.app/",
      codeUrl: "#",
      image: "/public/assets/Arabni/Arabni Screens_page-0010.jpg",
      features: [
        "Multi-modal transport integration",
        "Real-time route optimization",
        "Seamless payment system",
        "User-friendly mobile interface",
      ],
    },
    {
      id: "qurenet",
      title: "Qurenet Healthcare Platform",
      description:
        "A secure digital healthcare platform that connects patients with providers for appointments, telemedicine, and service management in one comprehensive ecosystem.",
      role: "Backend Developer",
      type: "Web Application",
      icon: Monitor,
      technologies: ["ASP.NET", "C#", "MS SQL Server", "Web API", "Healthcare"],
      liveUrl: "https://qurenet.com/",
      codeUrl: "#",
      image: "/assets/Qurenet/HomePage.png",
      features: [
        "Patient-provider appointment system",
        "Secure telemedicine integration",
        "Real-time service management",
        "Healthcare data encryption",
      ],
    },
    {
      id: "rungroop",
      title: "Rungroop Web App",
      description:
        "Rungroops is an online platform for runners. This platform will help you to find clubs, schedule events, and meet other runners in your area.",
      role: "Backend Developer",
      type: "Web Application",
      icon: Monitor,
      technologies: ["ASP.NET", "C#", "MS SQL Server", "Web API"],
      liveUrl: "https://rungroop.com/",
      codeUrl: "#",
      image: "/assets/Rungroop/HomePage.png",
      features: [
        "Connects runners with local groups and events",
        "Allows creating and joining running clubs",
        "Provides routes and places to run",
        "Supports Strava and Google sign-in",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world applications that showcase my technical expertise and
              problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`border-border hover:border-primary/30 transition-all duration-500 group overflow-hidden ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`lg:flex items-center ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Image/Mockup */}
                  <div className="lg:w-1/2 p-8 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-secondary/5">
                    <div className="relative">
                      <div
                        className={`${
                          ["qurenet", "rungroop"].includes(project.id)
                            ? "w-100 h-100"
                            : "w-80 h-100"
                        } bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center border border-border overflow-hidden`}
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title + " screenshot"}
                            className={`object-cover rounded-xl ${
                              ["qurenet", "rungroop"].includes(project.id)
                                ? "w-100 h-full"
                                : "w-full h-full"
                            }`}
                          />
                        ) : (
                          <project.icon className="w-16 h-16 text-primary/60" />
                        )}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-pulse delay-500" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 p-8 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-primary font-medium text-sm mb-1">
                        {project.role}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.type}
                      </p>
                    </div>

                    <p className="text-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground text-sm flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button asChild className="group/btn">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          View Live
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
