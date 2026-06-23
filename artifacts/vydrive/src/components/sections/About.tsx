import { motion } from "framer-motion";
import { ShieldCheck, Activity, Users, MapPin } from "lucide-react";

export function About() {
  const stats = [
    { value: "10", label: "Cybercabs in Phase 1 fleet" },
    { value: "$1.4M", label: "Seed capital raised" },
    { value: "5", label: "Dedicated revenue streams" },
    { value: "TN", label: "Clarksville based" },
  ];

  const trustSignals = [
    {
      icon: ShieldCheck,
      title: "Fully Insured",
      description: "$1M+ commercial auto and $5M umbrella coverage for total peace of mind."
    },
    {
      icon: Activity,
      title: "HIPAA Compliant",
      description: "Secure data handling and $1M cyber liability protecting medical privacy."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Founded by Narayan Rabindranath to serve the specific needs of our city."
    },
    {
      icon: MapPin,
      title: "24/7 Monitoring",
      description: "Real-time tracking and remote operations monitoring for every single ride."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground"
          >
            Built for <span className="text-secondary">Clarksville.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            VyDrive was founded by Narayan Rabindranath with a singular mission: to provide dependable, dignified, and affordable transportation for Clarksville's medical community and general public.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustSignals.map((signal, i) => (
            <motion.div 
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-6 rounded-3xl border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <signal.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{signal.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{signal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
