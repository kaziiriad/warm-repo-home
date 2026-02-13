import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Work */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card border-border glow-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Backend Developer Intern</h3>
              </div>
              <p className="text-secondary font-medium mb-1">Cooking Station</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Jun–Aug 2024</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Delivered measurable business impact through backend API development, performance optimization, and production deployment support.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <Card className="bg-card border-border glow-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-secondary" />
                <h3 className="font-semibold text-lg">BSc in Computer Science & Engineering</h3>
              </div>
              <p className="text-secondary font-medium mb-1">Daffodil International University</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Sep 2017 – Dec 2022</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
