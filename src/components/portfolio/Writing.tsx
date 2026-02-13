import { motion } from "framer-motion";
import { BookOpen, Youtube, MessageCircle, Code2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Writing = () => (
  <section className="py-24 bg-muted/30">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Writing & <span className="text-gradient-blue">Community</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Articles */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-card border-border glow-border h-full">
            <CardContent className="p-6">
              <BookOpen className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Published Articles</h3>
              <p className="text-muted-foreground text-sm mb-3">
                "Building a Scalable URL Shortener: System Design to Production" — 100+ views, featured in system design discussions.
              </p>
              <a
                href="https://medium.com/@kazisultanmahmud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm flex items-center gap-1 hover:underline"
              >
                Read on Medium <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </CardContent>
          </Card>
        </motion.div>

        {/* Community */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Card className="bg-card border-border glow-border h-full">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">200K+ readers on Quora</p>
                  <p className="text-xs text-muted-foreground">Tech insights in Bengali, ~200 followers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Youtube className="w-5 h-5 text-destructive mt-0.5" />
                <div>
                  <p className="text-sm font-medium">40+ instructional videos</p>
                  <p className="text-xs text-muted-foreground">I.T. Darshonik — bridging Bengali tech education</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code2 className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">500+ DSA problems solved</p>
                  <p className="text-xs text-muted-foreground">BeeCrowd · HackerRank · LeetCode</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Writing;
