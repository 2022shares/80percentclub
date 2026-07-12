import { Platform, IRawDeal, Category } from "@/types";
import { IPlatformService } from "./index";

class BajajElectronicsService implements IPlatformService {
  private platform: Platform = "bajaj-electronics";

  getPlatform(): Platform {
    return this.platform;
  }

  async fetchDeals(): Promise<IRawDeal[]> {
    return this.fetchMockDeals();
  }

  private async fetchMockDeals(): Promise<IRawDeal[]> {
    const mockDeals: IRawDeal[] = [
      {
        title: "OnePlus 12 5G (Flowy Emerald, 256GB) - 16GB RAM",
        description: "Snapdragon 8 Gen 3, Hasselblad camera, 5400mAh battery, 100W SUPERVOOC charging.",
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        originalPrice: 69999,
        currentPrice: 13999,
        platform: "bajaj-electronics",
        category: "electronics",
        productUrl: "https://www.bajajelectronics.com/oneplus-12-5g",
        rating: 4.6,
        reviewCount: 8765,
        expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000),
      },
      {
        title: "Xiaomi 14 Ultra 5G (White, 512GB) - 16GB RAM",
        description: "Leica quad camera, Snapdragon 8 Gen 3, 5300mAh battery, 90W charging, IP68.",
        imageUrl: "https://images.unsplash.com/photo-1598327773200-8a6f0c7d7c7e?w=400&h=400&fit=crop",
        originalPrice: 99999,
        currentPrice: 19999,
        platform: "bajaj-electronics",
        category: "electronics",
        productUrl: "https://www.bajajelectronics.com/xiaomi-14-ultra",
        rating: 4.5,
        reviewCount: 5432,
      },
      {
        title: "Voltas 1.5 Ton 5 Star Inverter Split AC",
        description: "Adjustable inverter compressor, copper condenser, anti-dust filter, stabilizer free operation.",
        imageUrl: "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=400&h=400&fit=crop",
        originalPrice: 54990,
        currentPrice: 10999,
        platform: "bajaj-electronics",
        category: "home",
        productUrl: "https://www.bajajelectronics.com/voltas-1-5-ton-ac",
        rating: 4.3,
        reviewCount: 9876,
      },
      {
        title: "IFB 8 kg Fully Automatic Front Load Washing Machine",
        description: "Aqua Energie water softener, 3D wash system, CradleWash for delicates, steam wash.",
        imageUrl: "https://images.unsplash.com/photo-1626806775351-538068a21838?w=400&h=400&fit=crop",
        originalPrice: 45990,
        currentPrice: 9199,
        platform: "bajaj-electronics",
        category: "home",
        productUrl: "https://www.bajajelectronics.com/ifb-8-kg-washing-machine",
        rating: 4.4,
        reviewCount: 7654,
      },
      {
        title: "Samsung 43 inch The Frame QLED 4K Smart TV",
        description: "Art Mode displays artwork, Quantum Dot technology, matte display, customizable bezels.",
        imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
        originalPrice: 79990,
        currentPrice: 15999,
        platform: "bajaj-electronics",
        category: "electronics",
        productUrl: "https://www.bajajelectronics.com/samsung-frame-tv",
        rating: 4.7,
        reviewCount: 3456,
      },
      {
        title: "Haier 258L Frost Free Double Door Refrigerator",
        description: "Twin Inverter Technology, 360° cooling, toughened glass shelves, stabilizer free operation.",
        imageUrl: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=400&h=400&fit=crop",
        originalPrice: 34990,
        currentPrice: 6999,
        platform: "bajaj-electronics",
        category: "home",
        productUrl: "https://www.bajajelectronics.com/haier-258l-refrigerator",
        rating: 4.2,
        reviewCount: 6789,
      },
      {
        title: "Marshall Stanmore III Bluetooth Speaker",
        description: "Legendary Marshall sound, wider soundstage, Bluetooth 5.2, RCA input, dynamic loudness.",
        imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        originalPrice: 39990,
        currentPrice: 7999,
        platform: "bajaj-electronics",
        category: "electronics",
        productUrl: "https://www.bajajelectronics.com/marshall-stanmore-iii",
        rating: 4.6,
        reviewCount: 2345,
      },
      {
        title: "Acer Predator Helios Neo 16 Gaming Laptop",
        description: "Intel Core i9, RTX 4070, 16 inch 165Hz display, 32GB RAM, 1TB SSD, RGB keyboard.",
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        originalPrice: 179990,
        currentPrice: 35998,
        platform: "bajaj-electronics",
        category: "electronics",
        productUrl: "https://www.bajajelectronics.com/acer-predator-helios-neo",
        rating: 4.5,
        reviewCount: 1234,
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 280));
    return mockDeals;
  }
}

export default new BajajElectronicsService();
