import { Item } from '@/types/item';
import { ItemCard } from './ItemCard';

interface ItemGridProps {
  items: Item[];
  emptyMessage?: string;
}

export function ItemGrid({ items, emptyMessage = "No items found" }: ItemGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div 
          key={item.id} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
