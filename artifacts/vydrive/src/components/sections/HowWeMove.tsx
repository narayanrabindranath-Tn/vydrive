import { motion } from "framer-motion";
import { Stethoscope, Clock, HeartHandshake, Briefcase, Car } from "lucide-react";

export function HowWeMove() {
  const streams = [
    {
      icon: Stethoscope,
      title: "Hospital & NEMT",
      description: "Hospital discharge and medical appointment transport. Contracted with Tennova Healthcare and Gateway Medical Center."
    },
    {
      icon: Clock,
      title: "Medical Treatment",
      description: "Reliable scheduled rides for regular visits like dialysis (3x/week) and oncology/chemo patients."
    },
    {
      icon: HeartHandshake,
      title: "Senior & Accessible",
      description: "Serving eligible seniors and riders with disabilities through screened referrals from local agencies."
    },
    {
      icon: Briefcase,
      title: "City & Workforce",
      description: "Contracts serving the City of Clarksville, Montgomery County, LG Electronics, Hankook Tire, and APSU students."
    },
    {
      icon: Car,
      title: "Community Rideshare",
      description: "Flat-rate, evening and weekend rideshare via our app or phone dispatch. No surge pricing. Ever."
    }
  ];

  return (
    <section id="how-we-move" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                How We Move
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Five tailored transportation streams delivering premium, reliable mobility to those who need it most.
              </p>
            </motion.div>

            <div className="space-y-8">
              {streams.map((stream, i) => (
                <motion.div 
                  key={stream.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                      <stream.icon size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{stream.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{stream.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:h-[800px] rounded-[2rem] overflow-hidden"
          >
            <img 
              src="/images/riders.png" 
              alt="VyDrive riders" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
