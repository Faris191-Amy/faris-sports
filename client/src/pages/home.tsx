import { Link } from "wouter";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import { categories, getFeaturedProducts, getNewProducts } from "@/lib/products-data";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&h=1080&fit=crop')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Faris Sport
              <br />
              <span className="text-primary-foreground/90">كل احتياجاتك الرياضية</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              اكتشف أفضل الأدوات الرياضية من أشهر الماركات العالمية. شحن سريع لجميع محافظات مصر.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="gap-2" data-testid="button-shop-now">
                  تسوق الآن
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/products?featured=true">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-featured"
                >
                  <Sparkles className="w-4 h-4" />
                  الأكثر مبيعاً
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              تسوق حسب الرياضة
            </h2>
            <Link href="/products">
              <Button variant="ghost" className="gap-2" data-testid="link-view-all-categories">
                عرض الكل
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                data-testid={`link-category-tile-${category.id}`}
              >
                <Card className="group overflow-visible cursor-pointer h-full hover-elevate">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-md">
                      <img
                        src={category.image}
                        alt={category.nameAr}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-4">
                        <h3 className="text-lg font-bold text-white text-center">
                          {category.nameAr}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                الأكثر مبيعاً
              </h2>
            </div>
            <Link href="/products?featured=true">
              <Button variant="ghost" className="gap-2" data-testid="link-view-all-featured">
                عرض الكل
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                عروض نهاية الموسم
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6">
                خصومات تصل إلى 50% على منتجات مختارة
              </p>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                  data-testid="button-offers"
                >
                  اكتشف العروض
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="text-8xl md:text-9xl font-bold text-primary-foreground/20">
                50%
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-primary-foreground">
                  خصم
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  وصل حديثاً
                </h2>
              </div>
              <Link href="/products?new=true">
                <Button variant="ghost" className="gap-2" data-testid="link-view-all-new">
                  عرض الكل
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
