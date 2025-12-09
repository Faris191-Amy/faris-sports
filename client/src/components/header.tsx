import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { useTheme } from "@/lib/theme-context";
import { categories } from "@/lib/products-data";
import { CategoryIcon } from "@/components/category-icon";
import { useState } from "react";

export function Header() {
  const [location, setLocation] = useLocation();
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4">
            <span>شحن مجاني للطلبات أكثر من 500 ج.م</span>
          </div>
          <div className="flex items-center gap-4">
            <span>خدمة العملاء:01029359034 </span>
            <span>العملة: ج.م (EGP)</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground">Faris Sport</h1>
                <p className="text-xs text-muted-foreground">كل احتياجاتك الرياضية</p>
              </div>
            </div>
          </Link>

          {/* Search bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="ابحث عن منتجات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-4 pl-12 w-full"
                data-testid="input-search"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute left-1 top-1/2 -translate-y-1/2"
                data-testid="button-search"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>

            {/* Cart */}
            <Link href="/cart" data-testid="link-cart">
              <Button size="icon" variant="ghost" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -top-1 -left-1 min-w-5 h-5 flex items-center justify-center text-xs p-0"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="md:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-6">
                  {/* Mobile search */}
                  <form onSubmit={(e) => { handleSearch(e); setMobileMenuOpen(false); }}>
                    <div className="relative">
                      <Input
                        type="search"
                        placeholder="ابحث عن منتجات..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pr-4 pl-12"
                        data-testid="input-search-mobile"
                      />
                      <Button
                        type="submit"
                        size="icon"
                        variant="ghost"
                        className="absolute left-1 top-1/2 -translate-y-1/2"
                      >
                        <Search className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>

                  {/* Categories */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">الأقسام</h3>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/products?category=${category.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3 py-2 px-3 rounded-md hover-elevate cursor-pointer">
                          <CategoryIcon icon={category.icon} className="w-5 h-5" />
                          <span>{category.nameAr}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Category nav - Desktop */}
      <nav className="hidden md:block border-t border-border bg-card">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-1 overflow-x-auto py-2">
            <li>
              <Link href="/products">
                <Button
                  variant={location === "/products" ? "secondary" : "ghost"}
                  size="sm"
                  data-testid="link-all-products"
                >
                  جميع المنتجات
                </Button>
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/products?category=${category.id}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    data-testid={`link-category-${category.id}`}
                  >
                    <CategoryIcon icon={category.icon} className="w-4 h-4" />
                    <span>{category.nameAr}</span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
