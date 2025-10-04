import { Folder, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const academicProjects = [
    {
      title: "Web Development",
      description: "Building responsive and secure websites using HTML, CSS, JSP, and MySQL.",
      tags: ["HTML", "CSS", "JSP", "MySQL"],
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
        <Link to="/web-development">
          <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </Link>
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
            My web development projects
          </p>
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center gap-4 mb-8 animate-slide-up">
            <Folder className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Projects</h3>
              <p className="text-muted-foreground">Web development coursework and projects</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;