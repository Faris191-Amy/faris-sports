import { useParams, Link } from "wouter";
import { useState } from "react";
import { ArrowRight, Minus, Plus, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/product-card";
import { getProductById, getCategoryById, getProductsByCategory, formatPrice } from "@/lib/products-data";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">المنتج غير موجود</h1>
          <Link href="/products">
            <Button data-testid="button-back-to-products">العودة للمنتجات</Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = getCategoryById(product.categoryId);
  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: "تمت الإضافة",
      description: `تم إضافة ${quantity} من ${product.nameAr} إلى السلة`,
    });
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            الرئيسية
          </Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-foreground transition-colors">
            المنتجات
          </Link>
          {category && (
            <>
              <ArrowRight className="w-4 h-4" />
              <Link
                href={`/products?category=${category.id}`}
                className="hover:text-foreground transition-colors"
              >
                {category.nameAr}
              </Link>
            </>
          )}
          <ArrowRight className="w-4 h-4" />
          <span className="text-foreground">{product.nameAr}</span>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Image */}
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    className="w-full h-full object-cover"
                  />
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge variant="default" className="text-sm">
                        جديد
                      </Badge>
                    )}
                    {discount > 0 && (
                      <Badge variant="destructive" className="text-sm">
                        خصم {discount}%
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Category */}
            {category && (
              <Link href={`/products?category=${category.id}`}>
                <Badge variant="secondary" className="cursor-pointer">
                  {category.nameAr}
                </Badge>
              </Link>
            )}

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {product.nameAr}
            </h1>

            {/* Rating */}
            {product.rating && product.rating > 0 && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating.toFixed(1)} ({product.reviewCount} تقييم)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {discount > 0 && (
                <Badge variant="destructive">وفر {formatPrice(product.originalPrice! - product.price)}</Badge>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.descriptionAr}
            </p>

            <Separator />

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  product.inStock ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                {product.inStock ? "متوفر في المخزون" : "غير متوفر حالياً"}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            {product.inStock && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-border rounded-md">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    data-testid="button-decrease-quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-medium" data-testid="text-quantity">
                    {quantity}
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={incrementQuantity}
                    data-testid="button-increase-quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {/* Add to Cart Button */}
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                  data-testid="button-add-to-cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                  أضف للسلة
                </Button>
              </div>
            )}

            <Separator />

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">توصيل سريع</p>
                  <p className="text-xs text-muted-foreground">3-5 أيام عمل</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">ضمان الجودة</p>
                  <p className="text-xs text-muted-foreground">منتج أصلي 100%</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">إرجاع سهل</p>
                  <p className="text-xs text-muted-foreground">خلال 14 يوم</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">منتجات مشابهة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
