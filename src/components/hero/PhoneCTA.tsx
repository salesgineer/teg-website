import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type PhoneCTAProps = {
  phone: {
    display: string;
    href: string;
  };
  whatsapp?: {
    href: string;
    text?: string;
  };
  className?: string;
};

export function PhoneCTA({ phone, whatsapp, className = '' }: PhoneCTAProps) {
  // Check if className includes justify-start for left alignment
  const isLeftAligned = className.includes('justify-start');

  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:gap-6 ${
        isLeftAligned ? 'items-start justify-start' : 'items-center justify-center'
      } ${className}`}
    >
      {/* Phone Number */}
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-foreground/20 bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90 dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      >
        <Link href={phone.href}>
          <Phone className="mr-2 h-5 w-5" />
          {phone.display}
        </Link>
      </Button>

      {/* WhatsApp CTA */}
      {whatsapp && (
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-foreground/20 bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90 dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        >
          <Link href={whatsapp.href} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            {whatsapp.text || 'WhatsApp'}
          </Link>
        </Button>
      )}
    </div>
  );
}
