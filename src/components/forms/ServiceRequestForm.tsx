'use client';

import type { ServiceRequestFormInput } from '@/validations/serviceRequestForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ServiceRequestFormSchema } from '@/validations/serviceRequestForm';

type ServiceRequestFormProps = {
  locale: string;
};

export function ServiceRequestForm({ locale }: ServiceRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ServiceRequestFormInput>({
    resolver: zodResolver(ServiceRequestFormSchema) as any,
    defaultValues: {
      name: '',
      phone: '',
      service_type: 'pre-purchase',
      preferred_time: 'morning',
      is_urgent: false,
      locale: locale as 'lv' | 'en' | 'ru',
    },
  });

  async function onSubmit(data: ServiceRequestFormInput) {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/service-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Request submitted!');
        form.reset();
      } else {
        toast.error(result.error || 'Something went wrong.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{locale === 'lv' ? 'Vārds' : locale === 'ru' ? 'Имя' : 'Name'}</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>{locale === 'lv' ? 'Telefons' : locale === 'ru' ? 'Телефон' : 'Phone'}</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+371 XXXX XXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{locale === 'lv' ? 'Pakalpojums' : locale === 'ru' ? 'Услуга' : 'Service'}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="pre-purchase">{locale === 'lv' ? 'Pārbaude' : locale === 'ru' ? 'Проверка' : 'Inspection'}</SelectItem>
                  <SelectItem value="car-search">{locale === 'lv' ? 'Meklēšana' : locale === 'ru' ? 'Поиск' : 'Search'}</SelectItem>
                  <SelectItem value="mobile-service">{locale === 'lv' ? 'Mobilais' : locale === 'ru' ? 'Мобильный' : 'Mobile'}</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferred_time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{locale === 'lv' ? 'Laiks' : locale === 'ru' ? 'Время' : 'Preferred Time'}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="morning">{locale === 'lv' ? 'Rīts' : locale === 'ru' ? 'Утро' : 'Morning'}</SelectItem>
                  <SelectItem value="afternoon">{locale === 'lv' ? 'Pēcpusdiena' : locale === 'ru' ? 'День' : 'Afternoon'}</SelectItem>
                  <SelectItem value="evening">{locale === 'lv' ? 'Vakars' : locale === 'ru' ? 'Вечер' : 'Evening'}</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? (locale === 'lv' ? 'Sūta...' : locale === 'ru' ? 'Отправка...' : 'Sending...') : (locale === 'lv' ? 'Sūtīt pieprasījumu' : locale === 'ru' ? 'Отправить запрос' : 'Submit Request')}
        </Button>
      </form>
    </Form>
  );
}
