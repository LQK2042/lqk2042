import { Github, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/avatar.jpg";

const ProfileHeader = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Avatar with glow effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-hero blur-2xl opacity-30 scale-110 animate-glow"></div>
          <img
            src={avatarImage}
            alt="Lê Quang Khải"
            className="relative w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary shadow-glow animate-float"
          />
        </div>

        {/* Name and title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Lê Quang Khải
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold tracking-wide mb-4">
            Information Security Student
            <span className="text-foreground"> - Web Security Specialization</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            K23 student at HCMUTE, passionate about system security, computer networks 
            and applying defense solutions against cyber attacks.
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" asChild className="group hover:border-primary hover:bg-primary/10 transition-bounce">
            <a href="https://www.facebook.com/wsd051810" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="group hover:border-primary hover:bg-primary/10 transition-bounce">
            <a href="https://github.com/LQK2042" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="group hover:border-primary hover:bg-primary/10 transition-bounce">
            <a href="https://www.linkedin.com/in/le-quang-khai-466055363/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;