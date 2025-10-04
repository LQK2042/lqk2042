import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const programmingSkills = [
    { name: "Python", level: 85 },
    { name: "C++", level: 80 },
    { name: "Java", level: 70 },
    { name: "C#", level: 75 }
  ];

  const softSkills = [
    "Team Leadership",
    "Security Analysis", 
    "Problem Solving",
    "Critical Thinking",
    "Risk Assessment",
    "Technical Documentation"
  ];

  const technicalInterests = [
    "Web Security",
    "Network Security",
    "Penetration Testing",
    "Ethical Hacking",
    "Cryptography",
    "Vulnerability Assessment",
    "Security Analysis"
  ];

  const experienceStats = [
    { value: "5+", label: "Years Programming" },
    { value: "CTF", label: "Competitions" },
    { value: "Security", label: "Lab Projects" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical skills and cybersecurity expertise developed through academic study and practical security labs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Programming Languages */}
          <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Programming & Security Tools</h3>
              <div className="space-y-6">
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-gradient-card border-0 shadow-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Security & Professional Skills</h3>
              <ul className="space-y-3">
                {softSkills.map((skill, index) => (
                  <li key={index} className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Technical Interests */}
          <Card className="bg-gradient-card border-0 shadow-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Cybersecurity Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {technicalInterests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/50 text-foreground rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Summary */}
        <div className="grid md:grid-cols-3 gap-6">
          {experienceStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;