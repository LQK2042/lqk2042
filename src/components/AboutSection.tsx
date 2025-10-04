import { Code, Trophy, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const achievements = [
    {
      icon: Code,
      title: "Programming Experience",
      description: "Started with Pascal in middle school, mastered C++ and Python in high school"
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "Active participant in academic programming contests and competitive programming"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Team leader for university group projects (3-5 people teams)"
    },
    {
      icon: Target,
      title: "Career Goal",
      description: "Transitioning from Information Security to Web Developer"
    }
  ];

  const hobbies = [
    "Manga & Anime",
    "Teamfight Tactics",
    "Honkai: Star Rail",
    "Valorant",
    "Competitive Programming",
    "CTF Challenges",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Information Security student specializing in Web Security, with a strong foundation in cybersecurity and a vision to build safer web applications.
          </p>
        </div>

        {/* Journey Section */}
        <Card className="mb-12 bg-gradient-card border-0 shadow-card animate-slide-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">My Journey</h3>
            <div className="text-foreground leading-relaxed space-y-4">
              <p>
                I'm currently a K23 student at the Faculty of Information Technology, majoring in Information Security, with a specialization in Web Security.
              </p>
              <p>
                My cybersecurity journey began with a curiosity about how websites work, which led me to explore HTML, JavaScript, and then delve deeper into penetration testing and secure programming methods. Over time, I learned how to detect, analyze, and mitigate web security vulnerabilities through academic projects and participating in security labs.
              </p>
              <p>
                Outside of cybersecurity, I enjoy solving Capture The Flag (CTF) challenges, exploring new cybersecurity tools, and keeping up with the latest technology trends. In my spare time, I also enjoy watching tech-related content, playing games, and keeping up with the latest in anime and manga culture.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hobbies & Interests */}
        <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Interests & Hobbies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary/50 text-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;