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
                I'm a <strong>Software Engineer</strong> with a passion for
                building thoughtful digital experiences, both in code and in
                design. My journey is rooted in a blend of technical skill and
                creative vision, shaped by my Computer Science degree and
                refined through hands-on development at ITI.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in full-stack development with .NET, Angular &
                React, crafting clean, scalable applications that solve real
                problems. Whether working with clients as a freelancer or
                collaborating in teams, I aim to bridge functionality with
                meaningful user interaction.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, I'm often speaking at Toastmasters,
                coaching rowing, or exploring the next challenge, always driven
                by curiosity, consistency, and the desire to build something
                worthwhile.
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
