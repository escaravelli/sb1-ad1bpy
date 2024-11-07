import { 
  Zap, Shield, BarChart, Users, Globe, Clock 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized platform.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security to keep your data safe and protected.",
    icon: Shield,
  },
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics tools.",
    icon: BarChart,
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team in real-time.",
    icon: Users,
  },
  {
    title: "Global Scale",
    description: "Scale your business globally with our distributed infrastructure.",
    icon: Globe,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support to help you succeed.",
    icon: Clock,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            Everything you need to take your business to the next level
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}