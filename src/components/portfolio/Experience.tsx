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
        {/* Backend Engineer & Product Builder */}
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
                    <h3 className="font-semibold text-lg">Backend Engineer & Product Builder</h3>
                    <p className="text-secondary font-medium">Building Production Systems</p>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/30">Aug 2024 – Present</Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Remote</span>
                <span>·</span>
                <span>Portfolio Projects</span>
              </div>

              {/* Context Statement */}
              <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground">
                  Building production systems to demonstrate platform engineering capabilities while actively seeking full-time opportunities
                </p>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Architected and deployed <span className="text-foreground font-medium">5 production-grade applications</span> serving <span className="text-primary font-medium">5,000+ real users</span> across e-commerce, fintech, and SaaS domains
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Managed <span className="text-foreground font-medium">11+ EC2 instances</span> with <span className="text-primary font-medium">99.9% uptime</span> through multi-AZ AWS infrastructure
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Built <span className="text-foreground font-medium">ElastiKube</span>: ML-enhanced Kubernetes autoscaler achieving <span className="text-primary font-medium">60% cost reduction</span> with 4-layer intelligent scaling
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Engineered polyglot URL shortener with <span className="text-foreground font-medium">Go redirect service</span> achieving <span className="text-primary font-medium">sub-1ms latency</span> and comprehensive observability
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Automated infrastructure deployment with <span className="text-foreground font-medium">Pulumi & Ansible</span>, reducing deployment time <span className="text-primary font-medium">93.75%</span> (4 hours → 15 minutes)
                  </p>
                </div>
              </div>

              {/* Tech Stack Used */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Go", "FastAPI", "Django", "AWS", "Kubernetes", "Docker", "PostgreSQL", "Redis", "MongoDB", "Pulumi", "Ansible", "OpenTelemetry", "Grafana"].map((t) => (
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
                    <h3 className="font-semibold text-lg">Backend Developer</h3>
                    <p className="text-secondary font-medium">Cooking Station</p>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/30">Jun–Aug 2024</Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh</span>
                <span>·</span>
                <span>Internship</span>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Designed <span className="text-foreground font-medium">role-based admin dashboard</span> serving <span className="text-primary font-medium">200+ users</span> with real-time meal analytics
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Eliminated <span className="text-foreground font-medium">40% of manual effort</span> in account management through automated workflows
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Built <span className="text-foreground font-medium">production-ready meal scheduling system</span> using cron jobs with configurable time boundaries
                  </p>
                </div>
              </div>

              {/* Tech Stack Used */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Django", "PostgreSQL", "Docker", "JavaScript", "HTML/CSS"].map((t) => (
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
                <Badge className="bg-secondary/10 text-secondary border-secondary/30">Sep 2017 – Sep 2023</Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh
              </div>

              {/* Achievements */}
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Ranked <span className="text-primary font-medium">6th/300+ participants</span> in DIU Programming Contest (Top 2%)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Solved <span className="text-primary font-medium">500+ competitive programming problems</span> across multiple platforms
                  </p>
                </div>
              </div>

              {/* Key Coursework */}
              <div className="border-t border-border pt-3">
                <p className="text-xs text-muted-foreground mb-2">Relevant Coursework:</p>
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