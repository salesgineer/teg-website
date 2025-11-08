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
  return (
    <div className={`flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 ${className}`}>
      {/* Phone Number */}
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-white bg-white/10 text-white hover:bg-white/20"
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
          className="border-white bg-white/10 text-white hover:bg-white/20"
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
