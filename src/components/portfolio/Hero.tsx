import { motion } from "framer-motion";
import { Linkedin, Mail, FileText, BookOpen, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(268_80%_70%_/_0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(195_90%_60%_/_0.1),transparent_50%)]" />

      <div className="section-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 px-4 py-1.5 text-sm">
            <Globe className="w-3.5 h-3.5 mr-1.5" />
            Open to Hire
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-gradient-purple">Sultan Mahmud</span>
          </h1>

          <p className="text-lg sm:text-xl text-secondary font-medium mb-3 font-mono">
            Backend Engineer · Infrastructure Automation · Distributed Systems
          </p>

          <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
            Building production-grade distributed systems with automated AWS deployments, achieving{" "}
            <span className="text-foreground font-medium">sub-5ms response times</span> at{" "}
            <span className="text-foreground font-medium">1K+ concurrent users</span>.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-gradient-purple hover:opacity-90">
              <a href="https://www.linkedin.com/in/sultan-mahmud-b25b25130/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="glow-border hover:bg-primary/10">
              <a href="mailto:kaziiriad@gmail.com">
                <Mail className="w-4 h-4" /> Hire Me
              </a>
            </Button>
            <Button asChild variant="outline" className="glow-border hover:bg-primary/10">
              <a href="https://medium.com/@kazisultanmahmud" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4" /> Medium
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <a href="https://docs.google.com/document/d/1eiou6NCl408uRhqx-_GazGj_YBPiKtliEkBcOPL95iI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" /> Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
