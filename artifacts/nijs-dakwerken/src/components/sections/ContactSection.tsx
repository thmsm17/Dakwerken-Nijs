import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSubmitContact, contactFormSchema, type ContactFormData } from "@/hooks/use-contact";

export function ContactSection() {
  const mutation = useSubmitContact();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-card shadow-2xl rounded-none overflow-hidden">
          
          {/* Contact Info (Left) */}
          <div className="lg:col-span-2 bg-secondary text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display mb-2">Neem Contact Op</h2>
              <p className="text-gray-300 mb-10 text-lg">
                Heeft u een vraag of wilt u een vrijblijvende offerte aanvragen? Wij helpen u graag verder.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-none">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Adres</h4>
                    <p className="text-gray-300">Dakwerkerstraat 123<br/>2000 Antwerpen, België</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-none">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telefoon</h4>
                    <p className="text-gray-300">0475 12 34 56</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-none">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">E-mail</h4>
                    <p className="text-gray-300">info@nijsdakwerken.be</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-white/20">
              <h4 className="font-bold mb-2">BTW Nummer</h4>
              <p className="text-gray-300">BE 0123.456.789</p>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-3 p-10 md:p-14">
            <h3 className="text-2xl font-display text-secondary mb-6">Stuur ons een bericht</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-bold">Naam *</FormLabel>
                        <FormControl>
                          <Input placeholder="Uw volledige naam" className="rounded-none h-12 bg-muted/50 border-border focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-bold">Telefoon *</FormLabel>
                        <FormControl>
                          <Input placeholder="Bv. 0475 12 34 56" className="rounded-none h-12 bg-muted/50 border-border focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-bold">E-mailadres *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="uw@email.be" className="rounded-none h-12 bg-muted/50 border-border focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-bold">Type Dienst *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none h-12 bg-muted/50 border-border focus:ring-primary">
                              <SelectValue placeholder="Selecteer een dienst" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hellend_dak">Hellend Dak</SelectItem>
                            <SelectItem value="plat_dak">Plat Dak</SelectItem>
                            <SelectItem value="dakisolatie">Dakisolatie</SelectItem>
                            <SelectItem value="renovatie">Dakrenovatie</SelectItem>
                            <SelectItem value="zinkwerk">Zink- & Koperwerken</SelectItem>
                            <SelectItem value="anders">Anders / Herstelling</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-bold">Uw Bericht *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Beschrijf kort uw project of de schade..." 
                          className="min-h-[150px] rounded-none resize-none bg-muted/50 border-border focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-none uppercase tracking-wide text-lg group"
                >
                  {mutation.isPending ? "Verzenden..." : "Verstuur Aanvraag"}
                  {!mutation.isPending && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
