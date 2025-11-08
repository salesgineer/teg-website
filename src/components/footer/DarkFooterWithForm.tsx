'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  email: z.string().email('Lūdzu, ievadiet derīgu e-pasta adresi'),
  name: z.string().min(2, 'Vārds ir obligāts'),
  message: z.string().min(10, 'Lūdzu, ievadiet savu jautājumu'),
});

type FormData = z.infer<typeof formSchema>;

type DarkFooterWithFormProps = {
  headline?: string;
  introText?: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
};

export function DarkFooterWithForm({
  headline = 'Sazin atsaities',
  introText = 'Jautājiet mums par visu izmantodams šīs formas!',
  contactInfo,
}: DarkFooterWithFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Ziņojums veiksmīgi nosūtīts!');
      form.reset();
    } catch (error) {
      toast.error('Radās kļūda. Lūdzu, mēģiniet vēlreiz.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form Column */}
          <div>
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">{headline}</h2>
            <p className="mb-8 text-white/70">{introText}</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">E-pasts</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="jusu.epasts@example.com"
                          className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Vārds</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jūsu vārds"
                          className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Jautājums vai vēlies</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Jūsu jautājums..."
                          rows={5}
                          className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? 'Nosūta...' : 'Nosūtīt'}
                </Button>
              </form>
            </Form>
          </div>

          {/* Illustration/Info Column */}
          <div className="flex items-center justify-center">
            <div className="text-center lg:text-left">
              <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-primary/20 lg:mx-0">
                {/* Placeholder for brand illustration */}
                <div className="h-32 w-32 rounded-full bg-primary" />
              </div>
              <p className="text-lg text-white/70">
                Mēs ar prieku atbildēsim
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        {contactInfo && (
          <>
            <Separator className="my-12 bg-white/10" />
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
              {contactInfo.phone && (
                <div>
                  <h3 className="mb-2 font-semibold">Tālrunis</h3>
                  <p className="text-white/70">{contactInfo.phone}</p>
                </div>
              )}
              {contactInfo.email && (
                <div>
                  <h3 className="mb-2 font-semibold">E-pasts</h3>
                  <p className="text-white/70">{contactInfo.email}</p>
                </div>
              )}
              {contactInfo.address && (
                <div>
                  <h3 className="mb-2 font-semibold">Adrese</h3>
                  <p className="text-white/70">{contactInfo.address}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
