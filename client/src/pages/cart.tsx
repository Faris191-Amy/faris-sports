import { Link } from "wouter";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products-data";

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  const deliveryFee = totalPrice >= 500 ? 0 : 50;
  const finalTotal = totalPrice + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">
              سلة التسوق فارغة
            </h1>
            <p className="text-muted-foreground mb-8">
              لم تضف أي منتجات إلى سلة التسوق بعد. ابدأ التسوق الآن!
            </p>
            <Link href="/products">
              <Button size="lg" className="gap-2" data-testid="button-start-shopping">
                ابدأ التسوق
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          سلة التسوق ({items.length} منتج)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => {
              const { product, quantity } = item;
              const itemTotal = product.price * quantity;

              return (
                <Card key={item.id} data-testid={`cart-item-${product.id}`}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      {/* Image */}
                      <Link href={`/product/${product.id}`}>
                        <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0 cursor-pointer">
                          <img
                            src={product.image}
                            alt={product.nameAr}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <Link href={`/product/${product.id}`}>
                          <h3 className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer line-clamp-2">
                            {product.nameAr}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          {formatPrice(product.price)} للقطعة
                        </p>

                        {/* Quantity & Actions */}
                        <div className="flex items-center justify-between mt-4 gap-4 flex-wrap">
                          <div className="flex items-center border border-border rounded-md">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              data-testid={`button-decrease-${product.id}`}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-10 text-center font-medium">
                              {quantity}
                            </span>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              data-testid={`button-increase-${product.id}`}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="font-bold text-primary">
                              {formatPrice(itemTotal)}
                            </span>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => removeItem(product.id)}
                              className="text-destructive hover:text-destructive"
                              data-testid={`button-remove-${product.id}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Clear Cart */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={clearCart}
                className="gap-2"
                data-testid="button-clear-cart"
              >
                <Trash2 className="w-4 h-4" />
                إفراغ السلة
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>ملخص الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                {deliveryFee > 0 && (
                  <p className="text-xs text-muted-foreground">
                    أضف منتجات بقيمة {formatPrice(500 - totalPrice)} للحصول على شحن مجاني
                  </p>
                )}
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">الإجمالي</span>
                  <span className="font-bold text-xl text-primary">
                    {formatPrice(finalTotal)}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Link href="/checkout" className="w-full">
                  <Button size="lg" className="w-full gap-2" data-testid="button-checkout">
                    إتمام الطلب
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/products" className="w-full">
                  <Button variant="outline" className="w-full" data-testid="button-continue-shopping">
                    متابعة التسوق
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
