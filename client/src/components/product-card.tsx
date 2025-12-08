import { Link } from "wouter";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@shared/schema";
import { formatPrice } from "@/lib/products-data";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast({
      title: "تمت الإضافة",
      description: `تم إضافة ${product.nameAr} إلى السلة`,
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${product.id}`} data-testid={`link-product-${product.id}`}>
      <Card className="group overflow-visible cursor-pointer h-full hover-elevate">
        <CardContent className="p-0">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-t-md">
            <img
              src={product.image}
              alt={product.nameAr}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Badges */}
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              {product.isNew && (
                <Badge variant="default" className="text-xs">
                  جديد
                </Badge>
              )}
              {discount > 0 && (
                <Badge variant="destructive" className="text-xs">
                  خصم {discount}%
                </Badge>
              )}
            </div>

            {/* Quick add button */}
            <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                onClick={handleAddToCart}
                data-testid={`button-add-cart-${product.id}`}
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-2">
            {/* Rating */}
            {product.rating && product.rating > 0 && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">
                  {product.rating.toFixed(1)} ({product.reviewCount})
                </span>
              </div>
            )}

            {/* Name */}
            <h3 className="font-semibold text-foreground line-clamp-2 min-h-[3rem]">
              {product.nameAr}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-lg font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Stock status */}
            {!product.inStock && (
              <Badge variant="secondary" className="text-xs">
                غير متوفر
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
