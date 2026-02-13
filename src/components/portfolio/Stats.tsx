import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "6+", label: "Production Apps" },
  { value: "<5ms", label: "API Response" },
  { value: "11+", label: "EC2 Instances Automated" },
  { value: "1K+", label: "Concurrent Users" },
  { value: "500+", label: "DSA Problems Solved" },
  { value: "200K+", label: "Blog Readers" },
];

const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={visible ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay, duration: 0.5, type: "spring" }}
        className="text-3xl sm:text-4xl font-bold text-gradient-purple mb-1"
      >
        {value}
      </motion.div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const Stats = () => (
  <section className="py-24 bg-muted/30">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        By The <span className="text-gradient-blue">Numbers</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
