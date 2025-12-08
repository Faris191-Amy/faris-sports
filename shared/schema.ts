import { pgTable, text, varchar, integer, real, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Categories table
export const categories = pgTable("categories", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  nameAr: text("name_ar").notNull(),
  icon: text("icon").notNull(),
  image: text("image").notNull(),
});

export const insertCategorySchema = createInsertSchema(categories);
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

// Products table
export const products = pgTable("products", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  nameAr: text("name_ar").notNull(),
  description: text("description").notNull(),
  descriptionAr: text("description_ar").notNull(),
  price: real("price").notNull(),
  originalPrice: real("original_price"),
  categoryId: varchar("category_id").notNull(),
  image: text("image").notNull(),
  images: text("images").array(),
  inStock: boolean("in_stock").default(true),
  isNew: boolean("is_new").default(false),
  isFeatured: boolean("is_featured").default(false),
  rating: real("rating").default(0),
  reviewCount: integer("review_count").default(0),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Cart items
export const cartItems = pgTable("cart_items", {
  id: varchar("id").primaryKey(),
  productId: varchar("product_id").notNull(),
  quantity: integer("quantity").notNull().default(1),
  sessionId: varchar("session_id").notNull(),
});

export const insertCartItemSchema = createInsertSchema(cartItems).omit({ id: true });
export type InsertCartItem = z.infer<typeof insertCartItemSchema>;
export type CartItem = typeof cartItems.$inferSelect;

// Cart item with product details
export type CartItemWithProduct = CartItem & {
  product: Product;
};

// Users table (existing)
export const users = pgTable("users", {
  id: varchar("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
