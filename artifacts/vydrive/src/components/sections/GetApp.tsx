import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Smartphone, PhoneCall } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export function GetApp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("You're on the list! We'll notify you when the app launches.");
    form.reset();
  }

  return (
    <section id="get-app" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground font-medium text-sm mb-6">
              Coming soon to iOS & Android
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              Your ride, on your terms.
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Book a ride, track your Cybercab in real-time, schedule recurring medical trips, and enjoy flat-rate zone pricing with absolutely zero surge.
            </p>

            <div className="bg-background p-6 rounded-2xl border border-border mb-8 flex gap-4 items-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <PhoneCall size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">No smartphone? No problem.</h4>
                <p className="text-muted-foreground">Our dedicated phone dispatch line ensures accessibility for all riders.</p>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          className="h-14 rounded-full px-6 bg-background text-lg"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="h-14 rounded-full px-8 text-lg bg-primary hover:bg-primary/90 text-white font-medium flex-shrink-0">
                  Notify Me
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative max-w-sm w-full drop-shadow-2xl">
              <img 
                src="/images/app-mockup.png" 
                alt="VyDrive App Mockup" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
