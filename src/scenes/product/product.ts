// src/scenes/product/product.ts
import { Product as ProductType } from "@/scenes/product/type"; // Đảm bảo đường dẫn chính xác

export async function getProducts() {
  try {
    const res = await fetch("/public/data/product.json");
    const products = await res.json();
    return products as ProductType[];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
