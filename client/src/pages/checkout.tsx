import { Link, useLocation } from "wouter";
import { useState } from "react";
import { ArrowRight, CheckCircle, CreditCard, Truck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products-data";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const deliveryFee = totalPrice >= 500 ? 0 : 50;
  const finalTotal = totalPrice + deliveryFee;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setOrderComplete(true);
    clearCart();
    toast({
      title: "تم تأكيد الطلب",
      description: "سيتم التواصل معك قريباً لتأكيد الطلب",
    });
    setIsSubmitting(false);
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">السلة فارغة</h1>
          <Link href="/products">
            <Button data-testid="button-go-shopping">العودة للتسوق</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">
              تم تأكيد طلبك بنجاح
            </h1>
            <p className="text-muted-foreground mb-8">
              شكراً لتسوقك من Faris Sport. سيتم التواصل معك قريباً لتأكيد الطلب والتوصيل.
            </p>
            <div className="space-y-3">
              <Link href="/products">
                <Button size="lg" className="w-full" data-testid="button-continue-after-order">
                  متابعة التسوق
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="w-full">
                  العودة للرئيسية
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          إتمام الطلب
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    معلومات الشحن
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">الاسم الأول *</Label>
                      <Input id="firstName" required data-testid="input-first-name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">الاسم الأخير *</Label>
                      <Input id="lastName" required data-testid="input-last-name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف *</Label>
                    <Input id="phone" type="tel" required dir="ltr" data-testid="input-phone" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" dir="ltr" data-testid="input-email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">العنوان بالتفصيل *</Label>
                    <Input id="address" required data-testid="input-address" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">المدينة *</Label>
                      <Input id="city" required data-testid="input-city" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="governorate">المحافظة *</Label>
                      <Input id="governorate" required data-testid="input-governorate" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    طريقة الدفع
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center gap-3 p-4 border border-border rounded-md hover-elevate cursor-pointer">
                      <RadioGroupItem value="cod" id="cod" data-testid="radio-cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Truck className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">الدفع عند الاستلام</p>
                            <p className="text-sm text-muted-foreground">ادفع كاش عند استلام الطلب</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center gap-3 p-4 border border-border rounded-md hover-elevate cursor-pointer mt-3">
                      <RadioGroupItem value="card" id="card" data-testid="radio-card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">بطاقة ائتمان / خصم</p>
                            <p className="text-sm text-muted-foreground">فيزا أو ماستركارد</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>ملخص الطلب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.nameAr}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-1">
                            {item.product.nameAr}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.quantity} x {formatPrice(item.product.price)}
                          </p>
                        </div>
                        <span className="text-sm font-medium">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">المجموع الفرعي</span>
                    <span className="font-medium">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">رسوم التوصيل</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? (
                        <span className="text-green-600">مجاناً</span>
                      ) : (
                        formatPrice(deliveryFee)
                      )}
                    </span>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg">الإجمالي</span>
                    <span className="font-bold text-xl text-primary">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                    data-testid="button-place-order"
                  >
                    {isSubmitting ? "جاري التأكيد..." : "تأكيد الطلب"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 rotate-180" />}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
