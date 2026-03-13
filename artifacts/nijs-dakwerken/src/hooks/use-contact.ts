import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

// Inferring schema for contact form since no shared routes exist
export const contactFormSchema = z.object({
  name: z.string().min(2, "Naam is verplicht (min. 2 karakters)"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(8, "Geldig telefoonnummer is verplicht"),
  serviceType: z.string().min(1, "Selecteer een type dienst"),
  message: z.string().min(10, "Bericht is verplicht (min. 10 karakters)"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Er is een fout opgetreden bij het verzenden.");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Bericht verzonden!",
        description: "Bedankt voor uw aanvraag. Wij nemen zo spoedig mogelijk contact met u op.",
        variant: "default",
      });
    },
    onError: () => {
      toast({
        title: "Bericht niet verzonden",
        description: "Het formulier werkt niet op deze versie van de site. Mail ons direct op info@nijsdakwerken.nl",
        variant: "destructive",
      });
    },
  });
}
