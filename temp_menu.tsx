
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimateOnScroll } from '@/hooks/use-scroll';

const designImage = PlaceHolderImages.find((img) => img.id === 'consult-design');
const themeImage = PlaceHolderImages.find((img) => img.id === 'consult-theme');

export default function MenuEngineeringPage() {
  return (
    <div className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimateOnScroll>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary">
              Menu Engineering & Restaurant Design
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              With 40+ years of industry mastery, we’ve built and transformed
              global restaurant brands that define success.
            </p>
          </AnimateOnScroll>
        </header>

        {/* Restaurant Design Consultancy */}
        <AnimateOnScroll>
          <section className="mb-16 sm:mb-20 bg-background rounded-lg p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl sm:text-4xl text-primary mb-6">
                  Designing for Restaurants
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  At The Gourmet Food Atlas, design is an experience architecture. We craft
                  bespoke dining environments that captivate and enchant.
                </p>
                <ul className="space-y-3 text-foreground/90 list-disc list-outside ml-5">
                  <li>Creating Designer Concept Restaurants</li>
                  <li>Curating luxury menus and workflows</li>
                  <li>Optimizing kitchen efficiency and flow</li>
                  <li>Designing fine-dining ambiences</li>
                  <li>Guiding brands toward award-winning excellence</li>
                </ul>
              </div>
              {designImage && (
                <div className="rounded-lg overflow-hidden group">
                  <Image
                    src={designImage.imageUrl}
                    alt={designImage.description}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={designImage.imageHint}
                  />
                </div>
              )}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Theme Restaurant Consulting */}
        <AnimateOnScroll>
          <section className="bg-background rounded-lg p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {themeImage && (
                <div className="rounded-lg overflow-hidden order-last md:order-first group">
                  <Image
                    src={themeImage.imageUrl}
                    alt={themeImage.description}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={themeImage.imageHint}
                  />
                </div>
              )}
              <div>
                <h2 className="font-headline text-3xl sm:text-4xl text-primary mb-6">
                  Consultancy for Theme Restaurants
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  From idea to execution — we craft concepts that resonate and
                  endure, rooted in real-world success.
                </p>
                <ul className="space-y-3 text-foreground/90 list-disc list-outside ml-5">
                  <li>Theme and concept development</li>
                  <li>Interior and menu design harmony</li>
                  <li>Culinary branding and storytelling</li>
                  <li>Staff training & SOP creation</li>
                </ul>
                <p className="mt-6 text-lg text-primary/80 italic">
                  Five award-winning restaurants — our legacy is your assurance.
                </p>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="text-center mt-16 sm:mt-20">
            <h3 className="font-headline text-2xl text-foreground">
              Ready to build your legacy?
            </h3>
            <Button
              asChild
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            >
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
