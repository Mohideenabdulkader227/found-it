import { Users, Package, CheckCircle, Heart } from 'lucide-react';

const stats = [
  { icon: Package, value: '2,400+', label: 'Items Posted' },
  { icon: CheckCircle, value: '1,850+', label: 'Items Reunited' },
  { icon: Users, value: '15K+', label: 'Community Members' },
  { icon: Heart, value: '98%', label: 'Success Rate' },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
