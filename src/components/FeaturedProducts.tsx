import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Air Runner Pro",
      price: 129,
      originalPrice: 159,
      rating: 5,
      image: product1,
      isNew: true,
      isSale: true,
    },
    {
      id: 2, 
      name: "Urban Classic High-Top",
      price: 199,
      rating: 4,
      image: product2,
      isNew: false,
      isSale: false,
    },
    {
      id: 3,
      name: "Sport Lifestyle Sneaker", 
      price: 89,
      originalPrice: 119,
      rating: 5,
      image: product3,
      isNew: false,
      isSale: true,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our hand-picked selection of premium footwear that combines cutting-edge technology with timeless style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-hero">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;