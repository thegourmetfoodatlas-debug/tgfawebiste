
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';
import { AnimateOnScroll } from '@/hooks/use-scroll';

const signatureRecipes = [
  {
    id: 'lamb-raan',
    title: 'Gourmet Lamb Raan',
    description:
      'A regal reimagination of Indian royalty, slow-cooked and artistically plated.',
  },
  {
    id: 'scallops',
    title: 'Smoked Coconut Scallops',
    description: 'Coastal luxury meets contemporary elegance.',
  },
  {
    id: 'biryani',
    title: 'Saffron Truffle Biryani',
    description: 'Fragrant, rich, and designed for sensory indulgence.',
  },
];

const culinaryVideos = [
  {
    id: 'maestro-table',
    title: 'The Maestro’s Table',
    description:
      'Step into Chef Nitin’s kitchen — where technique meets soul.',
  },
  {
    id: 'plating-art',
    title: 'Art of Plating',
    description: 'Transforming dishes into visual poetry.',
  },
  {
    id: 'behind-flame',
    title: 'Behind the Flame',
    description: 'Explore the creative process that shapes designer dining.',
  },
];

export default function RecipesPage() {
  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimateOnScroll>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary">
              Culinary Artistry Shared
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              For over four decades, our kitchens have been sanctuaries of
              creativity. We open our world of artistry — one masterpiece at a
              time.
            </p>
          </AnimateOnScroll>
        </header>

        {/* Signature Recipes Section */}
        <section className="mb-16 sm:mb-20">
          <AnimateOnScroll>
            <h2 className="font-headline text-3xl sm:text-4xl text-center text-foreground mb-10">
              The Chef’s Palette
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureRecipes.map((recipe, index) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === recipe.id
              );
              return (
                <AnimateOnScroll
                  key={recipe.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="bg-card border-primary/10 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 h-full">
                    {image && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl text-primary">
                        {recipe.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-foreground/70">
                        {recipe.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              );
            })}
          </div>
          <AnimateOnScroll>
            <p className="text-center mt-10 text-foreground/70 italic">
              Each recipe is a testament to balance — tradition meets
              innovation.
            </p>
          </AnimateOnScroll>
        </section>

        {/* Videos Section */}
        <section>
          <AnimateOnScroll>
            <h2 className="font-headline text-3xl sm:text-4xl text-center text-foreground mb-10">
              Masterclasses & Culinary Artistry
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culinaryVideos.map((video, index) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === video.id
              );
              return (
                <AnimateOnScroll
                  key={video.id}
                  style={{ animationDelay: `${(index + 3) * 150}ms` }}
                >
                  <Card className="bg-card border-primary/10 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 h-full">
                    {image && (
                      <div className="aspect-video overflow-hidden relative group">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <PlayCircle className="w-16 h-16 text-white/80" />
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl text-primary">
                        {video.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-foreground/70">
                        {video.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              );
            })}
          </div>
          <AnimateOnScroll>
            <p className="text-center mt-10 text-foreground/70 italic">
              Elegant, insightful, and inspiring — exclusive access to
              culinary brilliance.
            </p>
          </AnimateOnScroll>
        </section>
      </div>
    </div>
  );
}
