import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ItemGrid } from '@/components/items/ItemGrid';
import { mockItems } from '@/data/mockItems';

export function RecentItemsSection() {
  const recentItems = mockItems.slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Recent Posts
            </h2>
            <p className="text-muted-foreground">
              The latest lost and found items in your community
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/browse">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <ItemGrid items={recentItems} />
      </div>
    </section>
  );
}
