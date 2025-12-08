# Design Guidelines for Faris Sport E-Commerce Website

## Design Approach
**Reference-Based Approach** inspired by Nike, Adidas, and modern Middle Eastern e-commerce platforms. Focus on bold product imagery, athletic energy, and trust-building for the Egyptian market.

## RTL Layout Considerations
- Full RTL (Right-to-Left) support for Arabic content
- Navigation flows from right to left
- Product cards and grids maintain RTL reading pattern
- Icons and directional elements mirror appropriately

## Core Design Elements

### Typography
- **Primary Font**: Cairo or Tajawal (Arabic-optimized Google Fonts)
- **Headings**: Bold 700 weight, sizes from text-4xl (hero) to text-xl (section headers)
- **Body Text**: Regular 400 weight, text-base to text-lg for readability
- **Price Display**: Semibold 600 weight, prominent sizing
- **Currency**: Always display "ج.م" or "EGP" with prices

### Layout System
**Spacing Units**: Tailwind 4, 8, 12, 16, 24 units (p-4, m-8, gap-12, etc.)
- Consistent padding: py-16 for major sections, py-8 for cards
- Grid gaps: gap-6 for product grids, gap-4 for smaller elements
- Container max-width: max-w-7xl for main content areas

### Component Library

**Homepage Sections**:
1. **Hero Section**: Full-width banner with large sports imagery, overlay text "Faris Sport - كل احتياجاتك الرياضية", prominent CTA button with blurred background
2. **Category Grid**: 6-8 sport categories with image tiles (كرة القدم، كرة السلة، السباحة، الجيم، التنس، الجري، اليوجا، الملاكمة)
3. **Featured Products**: 4-column grid showcasing bestsellers with prices in EGP
4. **Special Offers**: Banner section for promotions and discounts
5. **Trust Signals**: Payment methods, delivery info, customer count in Arabic

**Product Cards**:
- Image-first design with hover zoom effect
- Product name in Arabic
- Price display: "٢٥٠ ج.م" format
- Quick "أضف للسلة" button
- Star ratings and review count
- Badge for "جديد" or "خصم"

**Navigation**:
- Top bar: Contact info, currency (EGP), language toggle
- Main nav: Logo (right side), categories, search bar, cart icon (left side)
- Sticky header on scroll
- Mobile: Hamburger menu (left side for RTL)

**Product Page**:
- Large image gallery (4-6 images)
- Right column: Title, price, description, size/color selectors, quantity, add to cart
- Specifications table
- Related products section

**Shopping Cart**:
- Sidebar or dedicated page
- Product thumbnails with quantities
- Subtotal, delivery (if applicable), total in EGP
- "إتمام الطلب" prominent CTA

**Footer**:
- 4-column layout: About, Categories, Customer Service, Contact
- Social media links (Facebook, Instagram prominent in Egypt)
- Payment method icons
- Copyright in Arabic and English

## Images

**Hero Section**: 
- Large action sports image (athlete in motion, equipment showcase)
- Size: Full-width, 60vh minimum
- Overlay: Semi-transparent dark gradient for text readability

**Category Tiles**:
- High-quality sport-specific imagery
- Size: Square or 16:9 ratio, 400x400px minimum
- Clear visual identity per sport

**Product Images**:
- Clean white background or lifestyle shots
- Multiple angles per product
- Minimum 800x800px, optimized for web
- Consistent styling across catalog

## Visual Identity
- **Athletic Energy**: Dynamic angles, action-oriented imagery
- **Trust & Professionalism**: Clean layouts, clear pricing, secure checkout indicators
- **Egyptian Market Appeal**: Localized language, familiar payment methods, delivery information
- **Mobile-First**: 70%+ traffic expected from mobile in Egyptian market

## Key Interactions
- Smooth add-to-cart animations
- Image zoom on product pages
- Filter and sort for product catalog (by category, price range, brand)
- Search autocomplete with Arabic support
- Quantity steppers on cart

## Accessibility
- High contrast text on images (use overlays/blurred backgrounds)
- Clear focus states for keyboard navigation
- RTL-aware form inputs and validation messages
- Arabic placeholder text in forms

## E-Commerce Essentials
- Clear "شحن مجاني" messaging if applicable
- Delivery time estimates ("التوصيل خلال ٣-٥ أيام")
- Return policy visibility
- Customer support contact (WhatsApp number highly recommended for Egypt)
- Size guides for apparel and equipment