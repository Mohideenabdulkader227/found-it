import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SearchFilters } from '@/components/items/SearchFilters';
import { ItemGrid } from '@/components/items/ItemGrid';
import { mockItems } from '@/data/mockItems';
import { ItemCategory, ItemType } from '@/types/item';

export default function Browse() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedType, setSelectedType] = useState<ItemType | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory | 'all'>('all');

  const filteredItems = useMemo(() => {
    return mockItems.filter((item) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Type filter
      if (selectedType !== 'all' && item.type !== selectedType) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedCategory]);

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Browse Items
          </h1>
          <p className="text-muted-foreground">
            Search through lost and found items in your area
          </p>
        </div>

        <div className="mb-8">
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
        </div>

        <ItemGrid 
          items={filteredItems} 
          emptyMessage="No items match your search. Try adjusting your filters."
        />
      </div>
    </Layout>
  );
}
