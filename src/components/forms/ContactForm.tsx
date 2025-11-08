'use client';

import type { ContactFormInput } from '@/validations/contactForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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
import { Textarea } from '@/components/ui/textarea';
import { ContactFormSchema } from '@/validations/contactForm';

type ContactFormProps = {
  locale: string;
};

export function ContactForm({ locale }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(ContactFormSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      phone: null,
      message: '',
      locale: locale as 'lv' | 'en' | 'ru',
    },
  });

  async function onSubmit(data: ContactFormInput) {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Form submitted successfully!');
        form.reset();
      } else {
        if (result.code === 'RATE_LIMIT_EXCEEDED') {
          toast.error(result.error);
        } else if (result.code === 'VALIDATION_ERROR') {
          toast.error('Please check your form data and try again.');
        } else {
          toast.error(result.error || 'Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{locale === 'lv' ? 'Vārds' : locale === 'ru' ? 'Имя' : 'Name'}</FormLabel>
              <FormControl>
                <Input placeholder={locale === 'lv' ? 'Jūsu vārds' : locale === 'ru' ? 'Ваше имя' : 'Your name'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder={locale === 'lv' ? 'jusu.epasts@piemers.lv' : locale === 'ru' ? 'ваш.email@example.com' : 'your.email@example.com'} {...field} />
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
              <FormLabel>{locale === 'lv' ? 'Telefons (neobligāti)' : locale === 'ru' ? 'Телефон (необязательно)' : 'Phone (optional)'}</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+371 XXXX XXXX" {...field} value={field.value || ''} />
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
              <FormLabel>{locale === 'lv' ? 'Ziņojums' : locale === 'ru' ? 'Сообщение' : 'Message'}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={locale === 'lv' ? 'Jūsu ziņojums...' : locale === 'ru' ? 'Ваше сообщение...' : 'Your message...'}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting
            ? (locale === 'lv' ? 'Sūta...' : locale === 'ru' ? 'Отправка...' : 'Sending...')
            : (locale === 'lv' ? 'Sūtīt ziņojumu' : locale === 'ru' ? 'Отправить сообщение' : 'Send Message')}
        </Button>
      </form>
    </Form>
  );
}
