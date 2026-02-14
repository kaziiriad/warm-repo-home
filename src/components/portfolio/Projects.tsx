import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  complexity: string;
  desc: string;
  tech: string[];
  github: string;
}

const projects: Project[] = [
  {
    name: "Scalable URL Shortener",
    complexity: "High",
    desc: "High-performance URL shortener with three independent microservices, dual database strategy, and production K3s deployment achieving sub-5ms redirect latency.",
    tech: ["FastAPI", "Redis", "PostgreSQL", "MongoDB", "K3s", "Pulumi", "OpenTelemetry"],
    github: "https://github.com/kaziiriad/url-shortener-scalable",
  },
  {
    name: "ElastiKube Autoscaler",
    complexity: "High",
    desc: "Production-grade autoscaling for K3s clusters with 4-layer intelligent scaling, ML-based predictive scaling via Prophet, and multi-AZ high availability.",
    tech: ["AWS Lambda", "DynamoDB", "K3s", "Prophet", "Pulumi", "CloudWatch"],
    github: "https://github.com/kaziiriad/elastikube",
  },
  {
    name: "StreamBuddy",
    complexity: "High",
    desc: "Scalable video streaming platform with adaptive bitrate using DASH, async Celery pipeline with FFMPEG transcoding, and automated AWS S3 infrastructure.",
    tech: ["Django", "React", "Celery", "FFMPEG", "AWS S3", "Docker"],
    github: "https://github.com/kaziiriad/streambuddy",
  },
  {
    name: "Distributed Job Queue",
    complexity: "Medium-High",
    desc: "Scalable job processing system with priority-based queuing, automatic worker scaling via Docker Swarm, and real-time monitoring dashboard.",
    tech: ["FastAPI", "Redis", "Celery", "Docker Swarm", "Jinja2"],
    github: "https://github.com/kaziiriad/job-queue-system-2.0",
  },
  {
    name: "Installment Manager",
    complexity: "Medium",
    desc: "Full-stack financial management app with JWT auth, role-based access, background OTP/notification emails, and Alembic migrations.",
    tech: ["FastAPI", "React", "PostgreSQL", "Redis", "Celery", "Tailwind"],
    github: "https://github.com/kaziiriad/installment_manager",
  },
  {
    name: "Notification System",
    complexity: "Medium-High",
    desc: "Multi-channel notification system supporting Email, SMS, and Push via async Celery + RabbitMQ pipeline for high-volume delivery.",
    tech: ["FastAPI", "Celery", "RabbitMQ", "PostgreSQL"],
    github: "https://github.com/kaziiriad/notification_system",
  },
  {
    name: "HA Task Management",
    complexity: "Medium",
    desc: "Enterprise-grade todo with Pulumi IaC, multi-AZ load balancing, PostgreSQL replication, and Redis Sentinel for HA caching.",
    tech: ["FastAPI", "React", "AWS", "PostgreSQL", "Redis Sentinel"],
    github: "https://github.com/kaziiriad/todo_application",
  },
  // TODO(human): Add a note about tesseraKT platform
];

const complexityColor = (c: string) => {
  if (c === "High") return "bg-primary/20 text-primary border-primary/30";
  if (c === "Medium-High") return "bg-secondary/20 text-secondary border-secondary/30";
  return "bg-badge-subtle text-accent-foreground border-accent/30";
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => (
  <section id="projects" className="py-24 bg-section-alt">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Featured <span className="text-gradient-purple">Projects</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <motion.div key={p.name} variants={item}>
            <Card className="bg-white dark:bg-card border-primary/20 card-hover h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg leading-tight text-foreground">{p.name}</h3>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors ml-2 shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <Badge className={`w-fit mb-3 text-xs ${complexityColor(p.complexity)}`}>
                  {p.complexity}
                </Badge>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/10 to-primary/20 text-primary border border-primary/20 font-mono font-medium hover:from-primary/20 hover:to-primary/30 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
