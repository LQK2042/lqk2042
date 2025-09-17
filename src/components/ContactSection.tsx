import { Mail, Phone, Github, Facebook, User, GraduationCap, MapPin, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const personalInfo = [
    {
      icon: User,
      title: "Full Name",
      value: "Lê Quang Khải"
    },
    {
      icon: GraduationCap,
      title: "University",
      value: "HCMUTE, Ho Chi Minh City"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ho Chi Minh, Vietnam"
    },
    {
      icon: Shield,
      title: "Major",
      value: "Information Security"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "lqk2042@gmail.com",
      href: "mailto:lqk2042@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0907390169",
      href: "tel:0907390169"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "LQK2042",
      href: "https://github.com/LQK2042"
    },
    {
      icon: Facebook,
      title: "Facebook",
      value: "Lê Quang Khải",
      href: "https://www.facebook.com/wsd051810"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Feel free to reach out for collaboration opportunities, project discussions, or just to connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Personal Information */}
          <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Personal Information</h3>
              </div>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                    <info.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <Card className="bg-gradient-card border-0 shadow-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Contact Methods</h3>
              </div>
              <div className="space-y-4">
                {contactMethods.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                    <contact.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.title}</p>
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Connect Card */}
        <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect!</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in discussing new opportunities, sharing ideas about programming, 
              or just having a conversation about technology and gaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity">
                <a href="mailto:lqk2042@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:border-primary hover:bg-primary/10 transition-colors">
                <a href="https://github.com/LQK2042" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;