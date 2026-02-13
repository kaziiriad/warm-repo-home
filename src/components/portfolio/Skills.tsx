import { motion } from "framer-motion";

const categories = [
  {
    title: "Backend",
    skills: ["Python", "Go", "FastAPI", "Django", "Asyncio"],
  },
  {
    title: "Infrastructure & DevOps",
    skills: ["AWS", "Terraform", "Pulumi", "Ansible", "Docker", "Nginx", "CI/CD", "PgBouncer"],
  },
  {
    title: "Distributed Systems",
    skills: ["Celery", "RabbitMQ", "Redis", "Docker Swarm", "K3s"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Observability",
    skills: ["OpenTelemetry", "Grafana", "Tempo", "Prometheus", "CloudWatch"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Technical <span className="text-gradient-blue">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm bg-muted border border-border text-foreground font-mono hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
