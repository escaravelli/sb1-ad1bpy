import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="px-4 py-24 md:py-32 bg-background">
      <div className="container flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Transform Your Business with <span className="text-primary">SaaSify</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Streamline your operations, boost productivity, and scale your business with our all-in-one SaaS platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}