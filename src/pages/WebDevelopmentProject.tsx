import { ArrowLeft, FileCode } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WebDevelopmentProject = () => {
  const labs = [
    {
      number: 1,
      title: "Lab 1:",
      link: "https://lqk2042.vercel.app",
      /*description: "Introduction to HTML structure, tags, and semantic elements",*/
      topics: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      number: 2,
      title: "Lab 2:",
      link: "https://lab2-web-h2s6.onrender.com",
      /*description: "Styling web pages with CSS, selectors, and box model",*/
      topics: ["HTML", "CSS", "JSP"]
    },
    {
      number: 3,
      title: "Lab 3:",
      link: "https://lab3-web-lqk.onrender.com",
      /*description: "Creating responsive layouts with media queries and grid",*/
      topics: ["HTML", "CSS", "JSP"]
    },
    {
      number: 4,
      title: "Lab 4:",
      link: "https://lab4-web-lqk.onrender.com",
      /*description: "JavaScript fundamentals, variables, and functions",*/
      topics: [/*"Variables", "Functions", "DOM manipulation"*/]
    },
    {
      number: 5,
      title: "Lab 5:",
      /*description: "Advanced JavaScript concepts and ES6+ features",*/
      topics: [/*"ES6+", "Async/Await", "API calls"*/],
      subLabs: [
        { id: "5.1", /*title: "ES6+ Features", */link: "https://lab5-1-web-lqk.onrender.com" },
        { id: "5.2", /*title: "Async Programming",*/ link: "https://lab5-2-web-lqk.onrender.com" }
      ]
    },
    {
      number: 6,
      title: "Lab 6:",
      /*description: "Introduction to modern frontend frameworks like React",*/
      topics: [/*"React components", "State management", "Hooks"*/],
      subLabs: [
        { id: "6.1", /* title: "React Components", */ link: "https://lab6-1-web-lqk.onrender.com" },
        { id: "6.2", /* title: "State Management", */ link: "https://lab6-2-web-lqk.onrender.com" },
        { id: "6.3", /* title: "React Hooks", */ link: "https://lab6-web-lqk.onrender.com" }
      ]
    },
    {
      number: 7,
      title: "Lab 7:",
      /*description: "Implementing security best practices in web applications",*/
      topics: ["HTML", "CSS", "Java", "JSP", "MySQL"],  
      subLabs: [
        { id: "7.1", /* title: "XSS & CSRF Protection", */ link : "https://lab7-1-web-lqk.onrender.com" },
        { id: "7.2", /* title: "Authentication Systems", */ link: "https://lab7-2-web-lqk.onrender.com" }
      ]
    },
    {
      number: 8,
      title: "Lab 8:",
      /*description: "Connecting frontend to backend APIs and databases",*/
      topics: ["HTML", "CSS", "Java", "JSP", "MySQL"],
      subLabs: [
        { id: "8.1", /* title: "REST API Integration", */ link : "https://lab8-1-web-lqk.onrender.com" },
        { id: "8.2", /* title: "Database Operations", */ link: "https://lab8-2-web-lqk.onrender.com" }
      ]
    },
    {
      number: 9,
      title: "Lab 9:",
      /*description: "Complete web application with security features",*/
      topics: ["HTML", "CSS", "Java", "JSP", "MySQL"],
      subLabs: [
        { id: "9.1", /* title: "Project Development", */ link: "https://lab9-1-web.onrender.com" },
        { id: "9.2", /* title: "Deployment & Testing", */ link: "https://lab9-2-web-lqk.onrender.com" }
      ]
    }
  ];

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/">
            <Button variant="ghost" className="mb-6 hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Web Development Course
          </h1>
          <p className="text-xl text-muted-foreground">
            Building responsive and secure websites using HTML, CSS, JavaScript, and modern frameworks
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <Card 
              key={lab.number}
              className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileCode className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {lab.number}
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {lab.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {lab.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {lab.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-3 py-1 bg-secondary/50 text-foreground rounded-full text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                {lab.subLabs ? (
                  <div className="space-y-2">
                    {lab.subLabs.map((subLab) =>
                      subLab.link ? (
                        <a
                          key={subLab.id}
                          href={subLab.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start group-hover:border-primary group-hover:text-primary transition-colors"
                          >
                            <FileCode className="w-4 h-4 mr-2" />
                            {subLab.id}: {subLab.title}
                          </Button>
                        </a>
                      ) : (
                        <Button
                          key={subLab.id}
                          variant="outline"
                          size="sm"
                          className="w-full justify-start group-hover:border-primary group-hover:text-primary transition-colors"
                        >
                          <FileCode className="w-4 h-4 mr-2" />
                          {subLab.id}: {subLab.title}
                        </Button>
                      )
                    )}
                  </div>
                ) : (
                  lab.link ? (
                    <a
                      href={lab.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                        <FileCode className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                      <FileCode className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  )
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WebDevelopmentProject;
