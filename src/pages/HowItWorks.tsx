import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Upload, Search, MessageCircle, CheckCircle, Shield, 
  Smartphone, Bell, Users, ArrowRight 
} from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Post Your Item',
    description: 'Report a lost or found item with photos, description, location, and date. The more details you provide, the better the chance of a match.',
  },
  {
    icon: Search,
    title: 'Smart Search & Matching',
    description: 'Our system automatically suggests potential matches based on category, location, and time. You can also search manually through all listings.',
  },
  {
    icon: MessageCircle,
    title: 'Secure Communication',
    description: 'Contact item owners or finders through our secure in-app messaging. No phone numbers or personal emails are shared.',
  },
  {
    icon: CheckCircle,
    title: 'Verify & Reunite',
    description: 'Before handing over an item, verify ownership through questions about unique features. Meet in a safe, public place.',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Privacy Protected',
    description: 'Your personal information is never shared. All communication happens through our secure platform.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Access FindIt from any device. Our responsive design works perfectly on phones, tablets, and desktops.',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    description: 'Get alerted immediately when someone posts a matching item or responds to your listing.',
  },
  {
    icon: Users,
    title: 'Community Powered',
    description: 'Join thousands of community members helping each other recover lost belongings.',
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How FindIt Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've made it simple to report, search, and recover lost items. 
            Follow these steps to get reunited with your belongings.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center relative">
                    <step.icon className="h-8 w-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Why Choose FindIt?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Coming Soon
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We're constantly improving FindIt to help you find your belongings faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-secondary/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-display font-semibold mb-2">Mobile App</h3>
                <p className="text-sm text-muted-foreground">
                  Native iOS and Android apps for faster reporting on the go.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-display font-semibold mb-2">AI Image Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Automatic suggestions based on visual similarity of items.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="font-display font-semibold mb-2">Trust Ratings</h3>
                <p className="text-sm text-muted-foreground">
                  Community trust scores to identify reliable members.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Report your lost item or help someone find theirs today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/post">
              Report an Item
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
