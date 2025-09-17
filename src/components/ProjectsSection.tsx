import { Folder, GitBranch, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const academicProjects = [
    {
      title: "Data Structures & Algorithms",
      description: "Implementation of various data structures and algorithms in C++",
      tags: ["C++", "Algorithms", "Academic"]
    },
    {
      title: "Object-Oriented Programming",
      description: "Design patterns and OOP principles applied in real-world scenarios",
      tags: ["OOP", "Design Patterns", "C++", "Academic"]
    },
    {
      title: "Web Development",
      description: "Building responsive and secure websites using HTML, CSS, JavaScript, and modern frameworks.",
      tags: ["HTML", "CSS"]
    }
  ];

  const competitiveProjects = [
    {
      title: "Contest Solutions",
      description: "Collection of algorithmic solutions from various programming contests",
      tags: ["Algorithms", "Problem Solving", "C++", "Competition"]
    },
    {
      title: "Data Structure Implementations",
      description: "Optimized implementations for competitive programming",
      tags: ["Data Structures", "Optimization", "C++", "Competition"]
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
      <CardContent className="p-6">
        <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-secondary/50 text-foreground rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary transition-colors">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Projects & Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of academic projects and competitive programming achievements
          </p>
        </div>

        {/* Academic Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 animate-slide-up">
            <Folder className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Projects</h3>
              <p className="text-muted-foreground">University coursework and group projects</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Programming Competitions */}
        <div>
          <div className="flex items-center gap-4 mb-8 animate-slide-up">
            <GitBranch className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Programming Competitions</h3>
              <p className="text-muted-foreground">Competitive programming solutions and achievements</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {competitiveProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;