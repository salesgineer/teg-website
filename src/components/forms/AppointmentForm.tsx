'use client';

import type { AppointmentFormInput } from '@/validations/appointmentForm';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AppointmentFormSchema } from '@/validations/appointmentForm';

type AppointmentFormProps = {
  locale: string;
};

export function AppointmentForm({ locale }: AppointmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentFormInput>({
    resolver: zodResolver(AppointmentFormSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service_type: 'pre-purchase',
      preferred_date: '',
      preferred_time: '',
      vehicle_info: null,
      message: null,
      locale: locale as 'lv' | 'en' | 'ru',
    },
  });

  async function onSubmit(data: AppointmentFormInput) {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Appointment booked successfully!');
        form.reset();
      } else {
        toast.error(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const serviceOptions = {
    'pre-purchase': { lv: 'Pārbaude pirms pirkuma (€100+)', en: 'Pre-Purchase Inspection (€100+)', ru: 'Проверка перед покупкой (€100+)' },
    'car-search': { lv: 'Auto meklēšana un piegāde (€350+)', en: 'Car Search & Delivery (€350+)', ru: 'Поиск и доставка автомобиля (€350+)' },
    'mobile-service': { lv: 'Mobilais serviss (€50+)', en: 'Mobile Roadside Service (€50+)', ru: 'Мобильная служба (€50+)' },
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
                    {Object.entries(serviceOptions).map(([value, labels]) => (
                      <SelectItem key={value} value={value}>
                        {labels[locale as 'lv' | 'en' | 'ru']}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="preferred_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{locale === 'lv' ? 'Datums' : locale === 'ru' ? 'Дата' : 'Date'}</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferred_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{locale === 'lv' ? 'Laiks' : locale === 'ru' ? 'Время' : 'Time'}</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="vehicle_info"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{locale === 'lv' ? 'Auto informācija (neobligāti)' : locale === 'ru' ? 'Информация об автомобиле (необязательно)' : 'Vehicle Info (optional)'}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={locale === 'lv' ? 'Piemērs: BMW 320d, 2018, VIN: WBAXXXX...' : locale === 'ru' ? 'Пример: BMW 320d, 2018, VIN: WBAXXXX...' : 'Example: BMW 320d, 2018, VIN: WBAXXXX...'}
                  {...field}
                  value={field.value || ''}
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
              <FormLabel>{locale === 'lv' ? 'Papildu piezīmes (neobligāti)' : locale === 'ru' ? 'Дополнительные заметки (необязательно)' : 'Additional Notes (optional)'}</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value || ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting
            ? (locale === 'lv' ? 'Rezervē...' : locale === 'ru' ? 'Бронирование...' : 'Booking...')
            : (locale === 'lv' ? 'Rezervēt laiku' : locale === 'ru' ? 'Забронировать' : 'Book Appointment')}
        </Button>
      </form>
    </Form>
  );
}
