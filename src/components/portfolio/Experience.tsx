import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, CheckCircle2, TrendingUp, Zap, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => (
  <section id="experience" className="py-24">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Experience & <span className="text-gradient-purple">Education</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Freelance Backend Engineer */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/80 border-border glow-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Backend Engineer</h3>
                    <p className="text-secondary font-medium">Freelance/Contract</p>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/30">Aug 2024 – Present</Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh</span>
                <span>·</span>
                <span>Full-time Contract</span>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Architected and delivered <span className="text-foreground font-medium">5 production systems</span> across e-commerce (2), FinTech (1), and SaaS platforms (2)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Serving <span className="text-primary font-medium">5,000+ combined users</span> with <span className="text-foreground font-medium">99.9% uptime</span>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm">
                    High-concurrency APIs sustaining <span className="text-primary font-medium">1,000+ concurrent users</span> with <span className="text-foreground font-medium">sub-10ms latency</span>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Reduced deployment time from <span className="text-foreground font-medium">4 hours to 15 minutes</span> with zero-downtime releases
                  </p>
                </div>
              </div>

              {/* Tech Stack Used */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "FastAPI", "Django", "PostgreSQL", "Redis", "AWS", "Pulumi", "Ansible", "GitHub Actions"].map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-muted border border-border text-foreground font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Backend Developer Intern */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-card/80 border-border glow-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Backend Developer Intern</h3>
                    <p className="text-secondary font-medium">Cooking Station</p>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/30">Jun–Aug 2024</Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh</span>
                <span>·</span>
                <span>Full-time Internship</span>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Designed <span className="text-foreground font-medium">RBAC dashboard</span> for <span className="text-primary font-medium">200+ users</span> with real-time analytics
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Automated <span className="text-foreground font-medium">40% of manual processes</span> through intelligent workflows
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Built <span className="text-foreground font-medium">production-ready meal scheduling system</span> with cron jobs
                  </p>
                </div>
              </div>

              {/* Tech Stack Used */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Django", "MySQL", "Docker", "JS", "HTML"].map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-muted border border-border text-foreground font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-card/80 border-border glow-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-lg">BSc in Computer Science & Engineering</h3>
                    <p className="text-secondary font-medium">Daffodil International University</p>
                  </div>
                </div>
                <Badge className="bg-secondary/10 text-secondary border-secondary/30">Sep 2017 – Dec 2022</Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh
              </div>

              {/* Key Coursework */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "Database Systems", "Distributed Systems", "Software Engineering"].map((c) => (
                    <span key={c} className="text-xs px-2 py-1 rounded-full bg-muted border border-border text-foreground">{c}</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
