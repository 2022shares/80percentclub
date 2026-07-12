import { Platform, IRawDeal, Category } from "@/types";
import { IPlatformService } from "./index";

class CromaService implements IPlatformService {
  private platform: Platform = "croma";

  getPlatform(): Platform {
    return this.platform;
  }

  async fetchDeals(): Promise<IRawDeal[]> {
    return this.fetchMockDeals();
  }

  private async fetchMockDeals(): Promise<IRawDeal[]> {
    const mockDeals: IRawDeal[] = [
      {
        title: "Apple iPhone 15 Pro Max 256GB - Natural Titanium",
        description: "A17 Pro chip, 48MP main camera, 5x telephoto zoom, titanium design, USB-C.",
        imageUrl: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400&h=400&fit=crop",
        originalPrice: 159900,
        currentPrice: 31980,
        platform: "croma",
        category: "electronics",
        productUrl: "https://www.croma.com/apple-iphone-15-pro-max",
        rating: 4.8,
        reviewCount: 9876,
        expiresAt: new Date(Date.now() + 72 * 60 * 60 * 1000),
      },
      {
        title: "Samsung Galaxy S24 Ultra 512GB - Titanium Gray",
        description: "Snapdragon 8 Gen 3, 200MP camera, S Pen, Galaxy AI, 5000mAh battery.",
        imageUrl: "https://images.unsplash.com/photo-1610945265078-3858a0828671?w=400&h=400&fit=crop",
        originalPrice: 144999,
        currentPrice: 28999,
        platform: "croma",
        category: "electronics",
        productUrl: "https://www.croma.com/samsung-galaxy-s24-ultra",
        rating: 4.7,
        reviewCount: 7654,
      },
      {
        title: "MacBook Air M3 15 inch 16GB RAM 512GB SSD",
        description: "Apple M3 chip, 15.3 inch Liquid Retina display, 18-hour battery, MagSafe charging.",
        imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        originalPrice: 154900,
        currentPrice: 30980,
        platform: "croma",
        category: "electronics",
        productUrl: "https://www.croma.com/macbook-air-m3-15-inch",
        rating: 4.6,
        reviewCount: 5432,
      },
      {
        title: "LG 55 inch OLED evo C4 Smart TV",
        description: "Alpha 9 AI Processor 4K Gen7, Dolby Vision IQ, 120Hz refresh, NVIDIA GeForce NOW built-in.",
        imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
        originalPrice: 199990,
        currentPrice: 39998,
        platform: "croma",
        category: "electronics",
        productUrl: "https://www.croma.com/lg-55-oled-evo-c4",
        rating: 4.8,
        reviewCount: 3456,
      },
      {
        title: "Dyson V15 Detect Absolute Cordless Vacuum",
        description: "Laser dust detection, piezo sensor, 240AW suction, 60-min runtime, HEPA filtration.",
        imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
        originalPrice: 62900,
        currentPrice: 12580,
        platform: "croma",
        category: "home",
        productUrl: "https://www.croma.com/dyson-v15-detect-absolute",
        rating: 4.5,
        reviewCount: 2341,
      },
      {
        title: "iPad Pro 12.9 inch M2 Wi-Fi 256GB",
        description: "Apple M2 chip, Liquid Retina XDR display, ProMotion, Thunderbolt, Apple Pencil hover.",
        imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        originalPrice: 112900,
        currentPrice: 22580,
        platform: "croma",
        category: "electronics",
        productUrl: "https://www.croma.com/ipad-pro-12-9-m2",
        rating: 4.7,
        reviewCount: 6789,
      },
      {
        title: "Bose QuietComfort Ultra Headphones",
        description: "CustomTune technology, immersive audio, world-class noise cancellation, 24-hour battery.",
        imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
        originalPrice: 35900,
        currentPrice: 7180,
        platform: "croma",
        category: "electronics",
        productUrl: "https://www.croma.com/bose-quietcomfort-ultra",
        rating: 4.4,
        reviewCount: 4567,
      },
      {
        title: "Samsung 655L Bespoke Side-by-Side Refrigerator",
        description: "Family Hub touchscreen, AI Energy mode, dual auto ice maker, UV deodorizing filter.",
        imageUrl: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=400&h=400&fit=crop",
        originalPrice: 189990,
        currentPrice: 37998,
        platform: "croma",
        category: "home",
        productUrl: "https://www.croma.com/samsung-655l-bespoke-refrigerator",
        rating: 4.3,
        reviewCount: 1234,
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockDeals;
  }
}

export default new CromaService();
