import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Athletic Performance",
      description: "High-performance footwear for serious athletes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&auto=format",
      count: "120+ Models"
    },
    {
      name: "Lifestyle & Casual",
      description: "Everyday comfort meets street style",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&auto=format",
      count: "200+ Models"
    },
    {
      name: "Formal & Business",
      description: "Professional footwear for every occasion",
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=300&fit=crop&auto=format",
      count: "80+ Models"
    },
    {
      name: "Kids & Youth",
      description: "Growing feet deserve the best",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=300&fit=crop&auto=format",
      count: "150+ Models"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect shoes for every lifestyle, from athletic performance to everyday elegance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group cursor-pointer overflow-hidden rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center text-primary group-hover:gap-2 transition-all duration-300">
                  <span className="font-medium text-sm">Explore Collection</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;