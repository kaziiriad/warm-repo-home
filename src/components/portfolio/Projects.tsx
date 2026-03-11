// import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// interface Project {
//   name: string;
//   complexity: string;
//   desc: string;
//   tech: string[];
//   github: string;
// }

// const projects: Project[] = [
//   {
//     name: "Scalable URL Shortener",
//     complexity: "High",
//     desc: "Polyglot microservice with Go redirect service (sub-1ms latency), full OpenTelemetry observability (Tempo/Loki/Grafana), circuit breaker pattern, and production K3s deployment.",
//     tech: ["Go", "FastAPI", "Chi", "Redis", "PostgreSQL", "MongoDB", "OpenTelemetry", "Tempo", "Loki", "K3s", "Pulumi"],
//     github: "https://github.com/kaziiriad/url-shortener-scalable",
//   },
//   {
//     name: "ElastiKube Autoscaler",
//     complexity: "High",
//     desc: "Production-grade autoscaling for K3s clusters with 4-layer intelligent scaling, ML-based predictive scaling via Prophet, and multi-AZ high availability.",
//     tech: ["AWS Lambda", "DynamoDB", "K3s", "Prophet", "Pulumi", "CloudWatch"],
//     github: "https://github.com/kaziiriad/elastikube",
//   },
//   {
//     name: "StreamBuddy",
//     complexity: "High",
//     desc: "Scalable video streaming platform with adaptive bitrate using DASH, async Celery pipeline with FFMPEG transcoding, and automated AWS S3 infrastructure.",
//     tech: ["Django", "React", "Celery", "FFMPEG", "AWS S3", "Docker"],
//     github: "https://github.com/kaziiriad/streambuddy",
//   },
//   {
//     name: "Distributed Job Queue",
//     complexity: "Medium-High",
//     desc: "Scalable job processing system with priority-based queuing, automatic worker scaling via Docker Swarm, and real-time monitoring dashboard.",
//     tech: ["FastAPI", "Redis", "Celery", "Docker Swarm", "Jinja2"],
//     github: "https://github.com/kaziiriad/job-queue-system-2.0",
//   },
//   {
//     name: "Installment Manager",
//     complexity: "Medium",
//     desc: "Full-stack financial management app with JWT auth, role-based access, background OTP/notification emails, and Alembic migrations.",
//     tech: ["FastAPI", "React", "PostgreSQL", "Redis", "Celery", "Tailwind"],
//     github: "https://github.com/kaziiriad/installment_manager",
//   },
//   {
//     name: "Notification System",
//     complexity: "Medium-High",
//     desc: "Multi-channel notification system supporting Email, SMS, and Push via async Celery + RabbitMQ pipeline for high-volume delivery.",
//     tech: ["FastAPI", "Celery", "RabbitMQ", "PostgreSQL"],
//     github: "https://github.com/kaziiriad/notification_system",
//   },
//   {
//     name: "HA Task Management",
//     complexity: "Medium",
//     desc: "Enterprise-grade todo with Pulumi IaC, multi-AZ load balancing, PostgreSQL replication, and Redis Sentinel for HA caching.",
//     tech: ["FastAPI", "React", "AWS", "PostgreSQL", "Redis Sentinel"],
//     github: "https://github.com/kaziiriad/todo_application",
//   },
//   // TODO(human): Add a note about tesseraKT platform
// ];

// const complexityColor = (c: string) => {
//   if (c === "High") return "bg-primary/20 text-primary border-primary/30";
//   if (c === "Medium-High") return "bg-secondary/20 text-secondary border-secondary/30";
//   return "bg-badge-subtle text-accent-foreground border-accent/30";
// };

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08 } },
// };
// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const Projects = () => (
//   <section id="projects" className="py-24 bg-section-alt">
//     <div className="section-container">
//       <motion.h2
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="text-3xl font-bold mb-12 text-center"
//       >
//         Featured <span className="text-gradient-purple">Projects</span>
//       </motion.h2>

//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {projects.map((p) => (
//           <motion.div key={p.name} variants={item}>
//             <Card className="bg-white dark:bg-card border-primary/20 card-hover h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
//               <CardContent className="p-6 flex flex-col flex-1">
//                 <div className="flex items-start justify-between mb-3">
//                   <h3 className="font-semibold text-lg leading-tight text-foreground">{p.name}</h3>
//                   <a
//                     href={p.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-muted-foreground hover:text-primary transition-colors ml-2 shrink-0"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                   </a>
//                 </div>

//                 <Badge className={`w-fit mb-3 text-xs ${complexityColor(p.complexity)}`}>
//                   {p.complexity}
//                 </Badge>

//                 <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

//                 <div className="flex flex-wrap gap-1.5">
//                   {p.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/10 to-primary/20 text-primary border border-primary/20 font-mono font-medium hover:from-primary/20 hover:to-primary/30 transition-all"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// );

// export default Projects;

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
    desc: "Polyglot microservice architecture with Go redirect service achieving sub-1ms latency (83% reduction from Python baseline). Features comprehensive observability stack (OpenTelemetry, Tempo, Loki, Grafana), circuit breaker fault tolerance, intelligent key pre-population with Celery workers, and PgBouncer connection pooling (53% overhead reduction). Production deployment on K3s/AWS.",
    tech: ["Go", "FastAPI", "Chi", "Redis", "PostgreSQL", "MongoDB", "OpenTelemetry", "Tempo", "Loki", "K3s", "Pulumi"],
    github: "https://github.com/kaziiriad/url-shortener-scalable",
  },
  {
    name: "ElastiKube Autoscaler",
    complexity: "High",
    desc: "Production-grade intelligent autoscaler for K3s clusters with 4-layer scaling system: time-aware thresholds (peak/off-peak), flash sale detection (>30% spike in 2min), and Prophet ML forecasting (15min ahead). Event-driven Lambda architecture with DynamoDB distributed locking, multi-AZ high availability, and spot instance support achieving 60% cost reduction ($200→$111-$149/month).",
    tech: ["AWS Lambda", "DynamoDB", "K3s", "Prophet", "Pulumi", "CloudWatch"],
    github: "https://github.com/kaziiriad/elastikube",
  },
  {
    name: "StreamBuddy",
    complexity: "High",
    desc: "Scalable video streaming platform with adaptive bitrate using MPEG-DASH technology. Features async Celery pipeline with FFMPEG transcoding for multiple quality levels, automated AWS S3 infrastructure for video storage and delivery, and real-time playback analytics. Handles video upload, processing, and adaptive streaming with bandwidth-aware quality selection.",
    tech: ["Django", "React", "Celery", "FFMPEG", "AWS S3", "Docker"],
    github: "https://github.com/kaziiriad/streambuddy",
  },
  {
    name: "Distributed Job Queue",
    complexity: "Medium-High",
    desc: "Enterprise job processing system with priority-based queuing (high/normal/low), dependency management for execution ordering, and automatic worker scaling via Docker Swarm monitoring queue depth. Features fault tolerance with retry mechanisms, dead-letter queue for failed jobs, real-time monitoring dashboard with Jinja2 templates, and configurable cooldown periods to prevent scaling fluctuations.",
    tech: ["FastAPI", "Redis", "Celery", "Docker Swarm", "Jinja2"],
    github: "https://github.com/kaziiriad/job-queue-system-2.0",
  },
  {
    name: "Installment Manager",
    complexity: "Medium",
    desc: "Full-stack financial management platform with secure OTP-based email verification (SendGrid), JWT authentication, and role-based access control (customer/admin). Features dynamic installment calculator, payment tracking with history, admin dashboard with metrics (total customers, revenue, pending payments), and weekly/monthly financial reporting. Background task processing with Celery for notifications.",
    tech: ["FastAPI", "React", "PostgreSQL", "Redis", "Celery", "Tailwind"],
    github: "https://github.com/kaziiriad/installment_manager",
  },
  {
  name: "InvoiceFlow",
  complexity: "High",
  desc: "Complete invoicing management system with advanced stock allocation (on-hand vs allocated) preventing overselling, automatic transaction audit trails, and JWT authentication with token blacklisting. Full-stack implementation with Django REST Framework backend using service layer pattern (SRP), React TypeScript frontend with shadcn/ui components, Swagger/ReDoc API documentation, and production-ready Docker deployment with Nginx reverse proxy, Gunicorn, and PostgreSQL.",
  tech: ["Django", "React", "TypeScript", "PostgreSQL", "JWT", "Vite", "shadcn/ui", "Tailwind", "Docker", "Nginx"],
  github: "https://github.com/kaziiriad/invoicing_application",
  },
  {
    name: "Notification System",
    complexity: "Medium-High",
    desc: "Multi-channel notification delivery system supporting Email, SMS, and Push notifications via async Celery + RabbitMQ pipeline for high-volume message processing. Features template-based messaging, delivery tracking with retry logic, priority queuing for urgent notifications, and comprehensive API for triggering notifications across all channels with configurable scheduling.",
    tech: ["FastAPI", "Celery", "RabbitMQ", "PostgreSQL"],
    github: "https://github.com/kaziiriad/notification_system",
  },
  {
    name: "HA Task Management",
    complexity: "Medium",
    desc: "Enterprise-grade todo application with Pulumi IaC for automated AWS deployment, multi-AZ load balancing with Nginx for high availability, PostgreSQL replication for database redundancy, and Redis Sentinel for fault-tolerant caching. Features auto-scaling groups, health checks, and zero-downtime deployments across availability zones. Full-stack React + FastAPI implementation.",
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