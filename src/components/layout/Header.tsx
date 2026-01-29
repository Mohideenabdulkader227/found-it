import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Plus, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">FindIt</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/browse" 
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Browse Items
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            How It Works
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/browse">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild>
            <Link to="/post">
              <Plus className="h-4 w-4 mr-2" />
              Report Item
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-3">
            <Link 
              to="/browse" 
              className="py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Items
            </Link>
            <Link 
              to="/how-it-works" 
              className="py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Button asChild className="mt-2">
              <Link to="/post" onClick={() => setMobileMenuOpen(false)}>
                <Plus className="h-4 w-4 mr-2" />
                Report Item
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
