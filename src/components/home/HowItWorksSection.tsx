import { Search, Upload, MessageCircle, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Report Your Item',
    description: 'Post details about your lost or found item with photos and location.',
  },
  {
    icon: Search,
    title: 'Search & Match',
    description: 'Our smart search helps connect lost items with found reports nearby.',
  },
  {
    icon: MessageCircle,
    title: 'Connect Securely',
    description: 'Message through our secure platform without sharing personal info.',
  },
  {
    icon: CheckCircle,
    title: 'Reunite & Verify',
    description: 'Verify ownership and safely arrange the handover of the item.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Finding and returning lost items has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center left-1/2 translate-x-4">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
