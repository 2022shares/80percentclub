import { Platform, IRawDeal, Category } from "@/types";
import { IPlatformService } from "./index";

class MyntraService implements IPlatformService {
  private platform: Platform = "myntra";

  getPlatform(): Platform {
    return this.platform;
  }

  async fetchDeals(): Promise<IRawDeal[]> {
    return this.fetchMockDeals();
  }

  private async fetchMockDeals(): Promise<IRawDeal[]> {
    const mockDeals: IRawDeal[] = [
      {
        title: "H&M Oversized Cotton T-Shirt - Pack of 2",
        description: "100% organic cotton, relaxed oversized fit, dropped shoulders, ribbed neckline.",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        originalPrice: 1999,
        currentPrice: 399,
        platform: "myntra",
        category: "fashion",
        productUrl: "https://www.myntra.com/hm-oversized-tshirt",
        rating: 4.3,
        reviewCount: 3456,
      },
      {
        title: "Mango Women's Floral Maxi Dress",
        description: "Viscose fabric, floral print, V-neckline, elastic waist, ankle length.",
        imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
        originalPrice: 4999,
        currentPrice: 999,
        platform: "myntra",
        category: "fashion",
        productUrl: "https://www.myntra.com/mango-floral-maxi",
        rating: 4.5,
        reviewCount: 2341,
      },
      {
        title: "Puma RS-X Reinvention Sneakers",
        description: "Mesh and leather upper, RS cushioning technology, rubber outsole, bold color blocking.",
        imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
        originalPrice: 8999,
        currentPrice: 1799,
        platform: "myntra",
        category: "fashion",
        productUrl: "https://www.myntra.com/puma-rs-x-sneakers",
        rating: 4.4,
        reviewCount: 4567,
      },
      {
        title: "MAC Studio Fix Fluid SPF 15 Foundation - NC30",
        description: "Buildable medium-to-full coverage, 24-hour wear, oil-free, broad spectrum SPF 15.",
        imageUrl: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=400&fit=crop",
        originalPrice: 3300,
        currentPrice: 660,
        platform: "myntra",
        category: "beauty",
        productUrl: "https://www.myntra.com/mac-studio-fix-foundation",
        rating: 4.6,
        reviewCount: 8765,
      },
      {
        title: "Tommy Hilfiger Classic Fit Chinos",
        description: "Stretch cotton twill, classic fit, signature flag logo, versatile neutral tone.",
        imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
        originalPrice: 5999,
        currentPrice: 1199,
        platform: "myntra",
        category: "fashion",
        productUrl: "https://www.myntra.com/tommy-hilfiger-chinos",
        rating: 4.2,
        reviewCount: 1234,
      },
      {
        title: "Fossil Gen 6 Smartwatch - Rose Gold",
        description: "Wear OS by Google, SpO2 sensor, Snapdragon Wear 4100+, 24-hour battery.",
        imageUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
        originalPrice: 22995,
        currentPrice: 4599,
        platform: "myntra",
        category: "electronics",
        productUrl: "https://www.myntra.com/fossil-gen-6",
        rating: 4.1,
        reviewCount: 2345,
      },
      {
        title: "L'Oreal Paris Revitalift Serum - 30ml",
        description: "1.5% pure hyaluronic acid, anti-aging, plumps skin, dermatologically tested.",
        imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
        originalPrice: 1499,
        currentPrice: 299,
        platform: "myntra",
        category: "beauty",
        productUrl: "https://www.myntra.com/loreal-revitalift-serum",
        rating: 4.4,
        reviewCount: 9876,
      },
      {
        title: "Adidas Training Gym Bag - Medium",
        description: "Polyester fabric, ventilated shoe compartment, adjustable shoulder strap, water resistant.",
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        originalPrice: 3499,
        currentPrice: 699,
        platform: "myntra",
        category: "fashion",
        productUrl: "https://www.myntra.com/adidas-gym-bag",
        rating: 4.3,
        reviewCount: 3456,
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 280));
    return mockDeals;
  }
}

export default new MyntraService();
