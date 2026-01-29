import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to find what you're looking for?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands of community members who have successfully recovered their belongings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/post">
                <Plus className="mr-2 h-4 w-4" />
                Report an Item
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/browse">
                <Search className="mr-2 h-4 w-4" />
                Browse Items
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
