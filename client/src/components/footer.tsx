import { Link } from "wouter";
import { categories } from "@/lib/products-data";
import { SiFacebook, SiInstagram, SiWhatsapp, SiTiktok } from "react-icons/si";
import { CreditCard, Truck, Shield, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      {/* Trust signals */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">توصيل سريع</h4>
              <p className="text-xs text-muted-foreground">خلال 3-5 أيام عمل</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">دفع آمن</h4>
              <p className="text-xs text-muted-foreground">فيزا وماستركارد</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">ضمان الجودة</h4>
              <p className="text-xs text-muted-foreground">منتجات أصلية 100%</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">دعم فني</h4>
              <p className="text-xs text-muted-foreground">خدمة عملاء 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Faris Sport</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              متجرك الأول للأدوات الرياضية في مصر. نوفر لك أفضل المنتجات من أشهر الماركات العالمية بأفضل الأسعار.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">الأقسام</h4>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${category.id}`}
                  >
                    {category.nameAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h4 className="font-semibold text-lg mb-4">خدمة العملاء</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  تتبع الطلب
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  سياسة الإرجاع
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  الشحن والتوصيل
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">العنوان:</span>
                <span> المنصورة شارع جيهان</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">الهاتف:</span>
                <span dir="ltr">01029359034</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">البريد:</span>
                <span>farismohamed1324@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">واتساب:</span>
                <span dir="ltr">01029359034</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 Faris Sport. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
