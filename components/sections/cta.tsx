import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg mb-8 max-w-[600px] mx-auto opacity-90">
          Join thousands of companies already growing with SaaSify
        </p>
        <Button size="lg" variant="secondary">
          Start Your Free Trial
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}