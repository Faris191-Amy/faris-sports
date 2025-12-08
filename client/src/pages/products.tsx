import { useSearch } from "wouter";
import { useState, useMemo } from "react";
import { Filter, SlidersHorizontal, Grid3X3, List, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductCard } from "@/components/product-card";
import {
  products,
  categories,
  searchProducts,
  formatPrice,
  getCategoryById,
} from "@/lib/products-data";

type SortOption = "default" | "price-asc" | "price-desc" | "rating" | "newest";

export default function Products() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const categoryParam = params.get("category");
  const searchParam = params.get("search");
  const featuredParam = params.get("featured");
  const newParam = params.get("new");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const maxPrice = Math.max(...products.map((p) => p.price));

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchParam) {
      result = searchProducts(searchParam);
    }

    // Featured filter
    if (featuredParam === "true") {
      result = result.filter((p) => p.isFeatured);
    }

    // New filter
    if (newParam === "true") {
      result = result.filter((p) => p.isNew);
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.categoryId));
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew));
        break;
    }

    return result;
  }, [searchParam, featuredParam, newParam, selectedCategories, priceRange, sortBy]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, maxPrice]);
    setSortBy("default");
  };

  const getPageTitle = () => {
    if (searchParam) return `نتائج البحث: "${searchParam}"`;
    if (featuredParam) return "الأكثر مبيعاً";
    if (newParam) return "وصل حديثاً";
    if (categoryParam) {
      const category = getCategoryById(categoryParam);
      return category ? category.nameAr : "جميع المنتجات";
    }
    return "جميع المنتجات";
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4">الأقسام</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-3">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
                data-testid={`checkbox-category-${category.id}`}
              />
              <Label
                htmlFor={`category-${category.id}`}
                className="text-sm cursor-pointer flex-1"
              >
                {category.nameAr}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-4">السعر</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            min={0}
            max={maxPrice}
            step={100}
            data-testid="slider-price-range"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Clear filters */}
      <Button
        variant="outline"
        onClick={clearFilters}
        className="w-full"
        data-testid="button-clear-filters"
      >
        مسح الفلاتر
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {getPageTitle()}
            </h1>
            <p className="text-muted-foreground mt-1">
              {filteredProducts.length} منتج
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Mobile filters */}
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="md:hidden gap-2 flex-1"
                  data-testid="button-mobile-filters"
                >
                  <Filter className="w-4 h-4" />
                  الفلاتر
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>الفلاتر</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FiltersContent />
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort */}
            <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
              <SelectTrigger className="w-full md:w-48" data-testid="select-sort">
                <SlidersHorizontal className="w-4 h-4 ml-2" />
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">الترتيب الافتراضي</SelectItem>
                <SelectItem value="price-asc">السعر: من الأقل للأعلى</SelectItem>
                <SelectItem value="price-desc">السعر: من الأعلى للأقل</SelectItem>
                <SelectItem value="rating">التقييم</SelectItem>
                <SelectItem value="newest">الأحدث</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  الفلاتر
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FiltersContent />
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <SearchX className="w-8 h-8 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  لا توجد منتجات
                </h2>
                <p className="text-muted-foreground mb-6">
                  جرب تغيير الفلاتر أو البحث عن شيء آخر
                </p>
                <Button onClick={clearFilters} data-testid="button-clear-all">
                  مسح جميع الفلاتر
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
