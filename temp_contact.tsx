
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { AnimateOnScroll } from '@/hooks/use-scroll';

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimateOnScroll>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary">
              Curate Your Experience
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              We’re here to assist you. Whether you wish to reserve a table,
              collaborate on a project, or seek our consulting expertise, we are
              just a message away.
            </p>
          </AnimateOnScroll>
        </header>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Contact Form */}
          <AnimateOnScroll>
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-primary/10 shadow-lg">
              <h2 className="font-headline text-3xl text-foreground mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll
            className="space-y-12"
            style={{ transitionDelay: '200ms' }}
          >
            <div>
              <h3 className="font-headline text-2xl text-primary mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+910000000000"
                  className="flex items-center gap-4 text-lg text-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-6 h-6 text-primary" />
                  <span>+91-00000-00000</span>
                </a>
                <a
                  href="mailto:contact@thegourmetfoodatlas.com"
                  className="flex items-center gap-4 text-lg text-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="w-6 h-6 text-primary" />
                  <span>contact@thegourmetfoodatlas.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-2xl text-primary mb-4">
                Follow Our Journey
              </h3>
              <p className="text-foreground/70 mb-4">
                Connect with us and follow our culinary story.
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-7 h-7" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-7 h-7" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
