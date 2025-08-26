import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  rating, 
  image, 
  isNew = false, 
  isSale = false 
}: ProductCardProps) => {
  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="product-image w-full h-80 object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              New
            </span>
          )}
          {isSale && (
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-200 hover:scale-110">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>

        {/* Quick Shop Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="btn-hero transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick Shop
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-card-foreground line-clamp-1">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-foreground">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Sizes */}
        <div className="flex gap-2 mb-4">
          {["7", "8", "9", "10", "11"].map((size) => (
            <button
              key={size}
              className="w-8 h-8 border border-border rounded hover:border-primary hover:text-primary transition-colors text-sm"
            >
              {size}
            </button>
          ))}
        </div>

        <Button className="w-full btn-secondary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;