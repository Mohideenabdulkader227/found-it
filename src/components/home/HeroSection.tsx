import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/browse?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section className="gradient-hero py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Lost something?{' '}
            <span className="text-primary">Find it here.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Connect with your community to recover lost items and help others find theirs.
            Together, we make reunions happen.
          </p>

          {/* Search Form */}
          <form 
            onSubmit={handleSearch} 
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for keys, wallet, phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base"
              />
            </div>
            <Button type="submit" size="lg" className="h-14 px-8">
              Search
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button variant="outline" size="lg" asChild className="group">
              <Link to="/post?type=lost">
                <span className="w-2 h-2 rounded-full bg-lost mr-2" />
                Report Lost Item
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <Link to="/post?type=found">
                <span className="w-2 h-2 rounded-full bg-found mr-2" />
                Report Found Item
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
