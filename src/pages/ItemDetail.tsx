import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, Calendar, User, MessageCircle, Share2, Flag } from 'lucide-react';
import { mockItems } from '@/data/mockItems';
import { CATEGORIES } from '@/types/item';
import { cn } from '@/lib/utils';

export default function ItemDetail() {
  const { id } = useParams();
  const item = mockItems.find((i) => i.id === id);

  if (!item) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Item Not Found</h1>
          <p className="text-muted-foreground mb-6">The item you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/browse">Browse All Items</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const category = CATEGORIES.find((c) => c.value === item.category);
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Layout>
      <div className="container py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/browse">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Browse
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  {category?.icon || '📦'}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  className={cn(
                    "font-semibold",
                    item.type === 'lost'
                      ? "bg-lost text-lost-foreground"
                      : "bg-found text-found-foreground"
                  )}
                >
                  {item.type === 'lost' ? 'Lost Item' : 'Found Item'}
                </Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  {category?.icon} {category?.label}
                </span>
              </div>

              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {item.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </span>
              </div>

              <div className="prose prose-gray max-w-none">
                <h3 className="font-display text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{item.contactName}</div>
                    <div className="text-sm text-muted-foreground">Posted this item</div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Messages are sent through our secure platform.
                  Your personal info stays private.
                </p>
              </CardContent>
            </Card>

            {/* Actions Card */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share This Item
                </Button>
                <Button variant="ghost" className="w-full text-muted-foreground">
                  <Flag className="mr-2 h-4 w-4" />
                  Report Issue
                </Button>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="bg-secondary/50">
              <CardHeader>
                <CardTitle className="text-base">Safety Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Meet in a public place for item handover</li>
                  <li>• Verify ownership before returning items</li>
                  <li>• Never share personal banking details</li>
                  <li>• Report suspicious behavior immediately</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
