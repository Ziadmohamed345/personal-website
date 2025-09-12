import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Code, Mic } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Frontend and backend expertise with React, Angular, C#, and ASP.NET",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description:
        "Led team of 5 developers in startup competitions with effective collaboration",
    },
    {
      icon: Award,
      title: "Competition Success",
      description:
        "Participated in Tatweer Misr Pitching Competition and Egyptian Startup Olympics",
    },
    {
      icon: Mic,
      title: "Public Speaking",
      description:
        "Best Speaker award winner at Toastmasters with refined presentation skills",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I am <strong>Ziad Mohamed</strong>, a software developer and ITI
                trainee with a passion for building modern, user-focused web
                applications. My technical expertise spans frontend and backend
                development, with hands-on experience in frameworks like React
                and Angular, alongside C#, ASP.NET, and SQL Server.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I enjoy bridging design and functionality, creating applications
                that are both visually appealing and highly functional. In
                addition to my technical journey, I have participated in startup
                competitions such as the Tatweer Misr Pitching Competition and
                the Egyptian Startup Olympics.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond coding, I am a Best Speaker award winner at Toastmasters
                Internation Club, where I refined my public speaking and
                leadership abilities. My portfolio showcases not only my
                technical projects but also my growth as a communicator, leader,
                and developer committed to delivering value-driven technology
                solutions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <highlight.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
