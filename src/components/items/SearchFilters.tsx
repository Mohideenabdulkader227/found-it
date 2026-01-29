import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { CATEGORIES, ItemCategory, ItemType } from '@/types/item';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType: ItemType | 'all';
  onTypeChange: (type: ItemType | 'all') => void;
  selectedCategory: ItemCategory | 'all';
  onCategoryChange: (category: ItemCategory | 'all') => void;
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedCategory,
  onCategoryChange,
}: SearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);
  const hasActiveFilters = selectedType !== 'all' || selectedCategory !== 'all';

  const clearFilters = () => {
    onTypeChange('all');
    onCategoryChange('all');
    onSearchChange('');
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for lost or found items..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className={cn("h-12 w-12", showFilters && "bg-secondary")}
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Type Toggle */}
      <div className="flex gap-2">
        {(['all', 'lost', 'found'] as const).map((type) => (
          <Button
            key={type}
            variant={selectedType === type ? 'default' : 'outline'}
            size="sm"
            onClick={() => onTypeChange(type)}
            className={cn(
              "capitalize",
              selectedType === type && type === 'lost' && "bg-lost hover:bg-lost/90",
              selectedType === type && type === 'found' && "bg-found hover:bg-found/90",
            )}
          >
            {type === 'all' ? 'All Items' : type}
          </Button>
        ))}
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="flex flex-wrap gap-3 p-4 bg-secondary/50 rounded-lg animate-fade-in">
          <Select value={selectedCategory} onValueChange={(v) => onCategoryChange(v as ItemCategory | 'all')}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  <span className="flex items-center gap-2">
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear filters
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
