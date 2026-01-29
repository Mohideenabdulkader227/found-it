import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';
import { Item, CATEGORIES } from '@/types/item';
import { cn } from '@/lib/utils';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const category = CATEGORIES.find(c => c.value === item.category);
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link to={`/item/${item.id}`}>
      <Card className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 group",
        item.type === 'lost' ? 'gradient-card-lost' : 'gradient-card-found'
      )}>
        <div className="aspect-[4/3] overflow-hidden bg-muted relative">
          {item.imageUrl ? (
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">
              {category?.icon || '📦'}
            </div>
          )}
          <Badge 
            className={cn(
              "absolute top-3 left-3 font-semibold",
              item.type === 'lost' 
                ? "bg-lost text-lost-foreground hover:bg-lost/90" 
                : "bg-found text-found-foreground hover:bg-found/90"
            )}
          >
            {item.type === 'lost' ? 'Lost' : 'Found'}
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">{category?.icon}</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {category?.label}
            </span>
          </div>
          <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {item.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {item.location.split(',')[0]}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
