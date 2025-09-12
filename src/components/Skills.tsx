import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      skills: ["C#", "ASP.NET Core", "Web API", "SQL Server", "Entity Framework", "RESTful APIs", "Authentication", "Database Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Figma", "Jira", "Slack"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Soft Skills",
      skills: ["Team Leadership", "Public Speaking", "Project Management", "Problem Solving", "Communication", "Agile Methodology", "Mentoring", "Presentation"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border hover:border-primary/30 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl font-bold">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3 group-hover:scale-110 transition-transform duration-300`} />
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
              Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent md:transform md:-translate-x-0.5" />
                
                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="flex items-center md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background" />
                    <div className="flex-1 md:pl-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2">ITI Full Stack Development Training</h4>
                          <p className="text-primary font-medium text-sm mb-2">Current</p>
                          <p className="text-muted-foreground text-sm">
                            Hands-on training in modern web technologies including React, Angular, C#, and ASP.NET Core.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="flex items-center md:justify-between">
                    <div className="flex-1 md:text-right md:pr-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2">Algoriza Full Stack Internship</h4>
                          <p className="text-primary font-medium text-sm mb-2">Current</p>
                          <p className="text-muted-foreground text-sm">
                            Developing web applications with ASP.NET Core, React.js, and SQL Server. 
                            Designing RESTful APIs and collaborating in Agile teams using GitHub and Jira.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background" />
                  </div>

                  <div className="flex items-center md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background" />
                    <div className="flex-1 md:pl-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2">Toastmasters Guest Speaker & Best Speaker Award</h4>
                          <p className="text-primary font-medium text-sm mb-2">2024 – Present</p>
                          <p className="text-muted-foreground text-sm">
                            Active guest speaker at Toastmasters International. Recognized for 
                            outstanding public speaking with a Best Speaker award, enhancing leadership and communication skills.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="flex items-center md:justify-between">
                    <div className="flex-1 md:text-right md:pr-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2">Software Engineering Teaching Assistant – Nile University</h4>
                          <p className="text-primary font-medium text-sm mb-2">2024</p>
                          <p className="text-muted-foreground text-sm">
                            Supported 50+ students in Data Structures, Algorithms, and Software Engineering labs, 
                            improving project quality and providing debugging guidance.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background" />
                  </div>

                  <div className="flex items-center md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background" />
                    <div className="flex-1 md:pl-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2">Backend Developer Intern – Key2Soft</h4>
                          <p className="text-primary font-medium text-sm mb-2">2023 – 2024</p>
                          <p className="text-muted-foreground text-sm">
                            Built backend modules with ASP.NET Boilerplate, optimized MSSQL queries, 
                            and implemented secure authentication to improve system performance.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="flex items-center md:justify-between">
                    <div className="flex-1 md:text-right md:pr-8">
                      <Card className="ml-12 md:ml-0 border-border">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg text-foreground mb-2">Startup Competitions Leadership</h4>
                          <p className="text-primary font-medium text-sm mb-2">2024</p>
                          <p className="text-muted-foreground text-sm">
                            Led development teams in Tatweer Misr Pitching Competition and Egyptian Startup Olympics,
                            managing collaboration through GitHub, Slack, and Jira
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 border-2 border-background" />
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