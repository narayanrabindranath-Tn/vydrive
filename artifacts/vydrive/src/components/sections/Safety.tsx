import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Safety() {
  const points = [
    "Tesla FSD platform with commercial-grade autonomous driving capabilities.",
    "Two-way intercom and emergency stop button in every vehicle.",
    "Real-time GPS tracking and 24/7 remote operations monitoring.",
    "Comprehensive insurance: $1M commercial auto, $1M general liability, $5M umbrella.",
    "Every medical and senior rider is screened prior to their first ride."
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Engineered for absolute safety.
            </h2>
            <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
              Our riders trust us with their health, their independence, and their loved ones. We honor that trust with uncompromising safety protocols.
            </p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/20">
            <ul className="space-y-6">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="flex-shrink-0 text-secondary mt-1" size={28} />
                  <span className="text-lg md:text-xl font-medium leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
