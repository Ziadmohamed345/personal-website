import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      skills: [
        "C#",
        "ASP.NET Core",
        "Web API",
        "SQL Server",
        "Entity Framework",
        "RESTful APIs",
        "Authentication",
        "Database Design",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Visual Studio",
        "VS Code",
        "Postman",
        "Figma",
        "Jira",
        "Slack",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Leadership",
        "Public Speaking",
        "Project Management",
        "Problem Solving",
        "Communication",
        "Agile Methodology",
        "Mentoring",
        "Presentation",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl font-bold">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3 group-hover:scale-110 transition-transform duration-300`}
                    />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              Professional{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Journey
              </span>
            </h3>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent md:transform md:-translate-x-0.5" />

                {/* Timeline items */}
                <div className="space-y-16">
                  <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background z-10" />
                    <div className="flex-1 md:max-w-[45%] md:pr-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2 leading-tight">
                            Freelance Web Developer & Branding Specialist
                          </h4>
                          <p className="text-primary font-medium text-sm mb-3">
                            Jul 2020 – Present
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Delivered over 25 projects including responsive
                            websites, branding, and print materials, managing
                            full project lifecycles.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="flex-1 md:max-w-[45%] md:ml-auto md:pl-8 order-2 md:order-1">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2 leading-tight">
                            Toastmasters Member
                          </h4>
                          <p className="text-primary font-medium text-sm mb-3">
                            May 2024 – Present
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Actively developing public speaking and leadership
                            skills. Awarded Best Speaker in club competitions.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background z-10 order-1 md:order-2" />
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background z-10" />
                    <div className="flex-1 md:max-w-[45%] md:pr-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2 leading-tight">
                            Full Stack Development Program — ITI
                          </h4>
                          <p className="text-primary font-medium text-sm mb-3">
                            Jul 2025 – Oct 2025
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Completed intensive training in .NET & Angular,
                            building full-stack applications with modern tools
                            and practices.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="flex-1 md:max-w-[45%] md:ml-auto md:pl-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2 leading-tight">
                            Software Engineer Intern — Gameball
                          </h4>
                          <p className="text-primary font-medium text-sm mb-3">
                            Oct 2025 – Nov 2025
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Contributed to backend systems and API integrations,
                            gaining hands-on experience in real-world software
                            development.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background z-10" />
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background z-10" />
                    <div className="flex-1 md:max-w-[45%] md:pr-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2 leading-tight">
                            Operations Agent — Noon / NowNow App
                          </h4>
                          <p className="text-primary font-medium text-sm mb-3">
                            Mar 2025 – Jun 2025
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Managed delivery operations and resolved conflicts
                            to ensure smooth service and customer satisfaction
                            in a remote team.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="flex-1 md:max-w-[45%] md:ml-auto md:pl-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2 leading-tight">
                            Junior Teaching Assistant — Nile University
                          </h4>
                          <p className="text-primary font-medium text-sm mb-3">
                            Mar 2024 – May 2024
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Supported students in Data Structures and Software
                            Engineering courses.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background z-10" />
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background z-10" />
                    <div className="flex-1 md:max-w-[45%] md:pr-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2 leading-tight">
                            Software Engineering Intern — Key2Soft
                          </h4>
                          <p className="text-primary font-medium text-sm mb-3">
                            Jul 2023 – Mar 2024
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Developed backend modules using ASP.NET Boilerplate
                            and MSSQL, implementing authentication and unit
                            tests.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
