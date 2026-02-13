import { motion } from "framer-motion";
import { Server, Zap, GitBranch, Network, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Server,
    title: "IaC Expert",
    desc: "Automated AWS deployments managing 11+ EC2 instances with Pulumi & Ansible",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    desc: "Optimized systems achieving sub-5ms response times with 1K+ concurrent users",
  },
  {
    icon: GitBranch,
    title: "DevOps Automation",
    desc: "Zero-touch deployments with CI/CD, containerization, and orchestration",
  },
  {
    icon: Network,
    title: "Distributed Systems",
    desc: "Fault-tolerant architectures with auto-scaling, load balancing, and HA",
  },
  {
    icon: PenTool,
    title: "Technical Writing",
    desc: "Published articles explaining complex architectures in simple words",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Differentiators = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          What Sets Me <span className="text-gradient-purple">Apart</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((d) => (
            <motion.div key={d.title} variants={item}>
              <Card className="bg-card border-border card-hover glow-border h-full">
                <CardContent className="p-6">
                  <d.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{d.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiators;
