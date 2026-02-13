import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, BookOpen, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { icon: Mail, label: "kaziiriad@gmail.com", href: "mailto:kaziiriad@gmail.com" },
  { icon: Phone, label: "+880 1683152495", href: "tel:+8801683152495" },
  { icon: Linkedin, label: "Sultan Mahmud", href: "https://www.linkedin.com/in/sultan-mahmud-dev/" },
  { icon: BookOpen, label: "Medium", href: "https://medium.com/@kazisultanmahmud" },
  { icon: Youtube, label: "I.T. Darshonik", href: "https://www.youtube.com/@sultanmahmud07" },
];

const Contact = () => (
  <section id="contact" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Let's <span className="text-gradient-purple">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          Looking for a backend engineer who can design scalable distributed systems, automate infrastructure from scratch, and write clean, testable code? Let's build something amazing together.
        </p>

        <div className="flex flex-col gap-3 items-center">
          {links.map((l) => (
            <Button
              key={l.label}
              asChild
              variant="outline"
              className="w-full max-w-sm justify-start glow-border hover:bg-primary/10"
            >
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                <l.icon className="w-4 h-4 mr-3 text-primary" />
                {l.label}
              </a>
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
