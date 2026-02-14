import { motion } from "framer-motion";
import { Code2, Shield, Rocket, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header Badge */}
          <div className="flex justify-center mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-1.5 text-sm">
              <Rocket className="w-3.5 h-3.5 mr-1.5" />
              About Me
            </Badge>
          </div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center"
          >
            Hi, I'm{" "}
            <span className="text-gradient-purple">Sultan Mahmud</span>
          </motion.h2>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-center text-muted-foreground mb-8 leading-relaxed"
          >
            A passionate <span className="text-foreground font-medium">Backend Engineer</span> and{" "}
            <span className="text-foreground font-medium">Infrastructure Automation Specialist</span> from Dhaka, Bangladesh.
            I specialize in building <span className="text-foreground font-medium">production-grade distributed systems</span> with full automation
            from infrastructure to deployment.
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border-border glow-border rounded-lg p-6"
          >
            <h3 className="font-semibold text-lg mb-4 text-center">
              What I Bring to the Table
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Code2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Clean Architecture</p>
                  <p className="text-xs text-muted-foreground">
                    Scalable microservices with proper separation of concerns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Production Ready</p>
                  <p className="text-xs text-muted-foreground">
                    Battle-tested with comprehensive testing & monitoring
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Automation First</p>
                  <p className="text-xs text-muted-foreground">
                    IaC, CI/CD, zero-touch deployments
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Team Collaboration</p>
                  <p className="text-xs text-muted-foreground">
                    Clear communication & documentation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground mb-2">
              Currently Looking For
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-primary/10 text-primary border-primary/30">Remote Backend Roles</Badge>
              <Badge className="bg-secondary/10 text-secondary border-secondary/30">Distributed Systems</Badge>
              <Badge className="bg-accent/10 text-accent-foreground border-accent/30">Cloud Architecture</Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;