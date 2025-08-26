import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shoes.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-hero text-white mb-6 animate-fade-in">
          Step Into
          <span className="block text-primary-glow">Excellence</span>
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Discover the perfect blend of style, comfort, and performance. 
          From athletic excellence to everyday elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button className="btn-hero">
            Shop New Arrivals
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg">
            Explore Collections
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-glow">50K+</div>
            <div className="text-white/80">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-glow">500+</div>
            <div className="text-white/80">Shoe Models</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-glow">100+</div>
            <div className="text-white/80">Premium Brands</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;