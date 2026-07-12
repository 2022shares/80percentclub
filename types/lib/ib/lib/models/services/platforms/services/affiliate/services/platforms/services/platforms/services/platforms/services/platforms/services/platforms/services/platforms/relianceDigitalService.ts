import { Platform, IRawDeal, Category } from "@/types";
import { IPlatformService } from "./index";

class RelianceDigitalService implements IPlatformService {
  private platform: Platform = "reliance-digital";

  getPlatform(): Platform {
    return this.platform;
  }

  async fetchDeals(): Promise<IRawDeal[]> {
    return this.fetchMockDeals();
  }

  private async fetchMockDeals(): Promise<IRawDeal[]> {
    const mockDeals: IRawDeal[] = [
      {
        title: "Samsung 65 inch Neo QLED 4K Smart TV",
        description: "Quantum Matrix Technology, Neural Quantum Processor 4K, Dolby Atmos, 120Hz refresh rate.",
        imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
        originalPrice: 249990,
        currentPrice: 49999,
        platform: "reliance-digital",
        category: "electronics",
        productUrl: "https://www.reliancedigital.in/samsung-65-neo-qled",
        rating: 4.7,
        reviewCount: 3245,
        expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000),
      },
      {
        title: "LG 7.5 kg Fully Automatic Front Load Washing Machine",
        description: "AI Direct Drive, Steam technology, 6 Motion DD, Wi-Fi enabled, inverter motor.",
        imageUrl: "https://images.unsplash.com/photo-1626806775351-538068a21838?w=400&h=400&fit=crop",
        originalPrice: 54990,
        currentPrice: 10999,
        platform: "reliance-digital",
        category: "home",
        productUrl: "https://www.reliancedigital.in/lg-7-5-kg-washing-machine",
        rating: 4.5,
        reviewCount: 8765,
      },
      {
        title: "Whirlpool 340L Frost Free Triple Door Refrigerator",
        description: "6th Sense ActiveFresh Technology, zeolite technology, microblock, stabilizer free operation.",
        imageUrl: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=400&h=400&fit=crop",
        originalPrice: 45990,
        currentPrice: 9199,
        platform: "reliance-digital",
        category: "home",
        productUrl: "https://www.reliancedigital.in/whirlpool-340l-refrigerator",
        rating: 4.4,
        reviewCount: 5432,
      },
      {
        title: "Sony PlayStation 5 Console with Extra Controller",
        description: "Ultra-high speed SSD, Ray tracing, 4K-TV gaming, haptic feedback, 3D audio.",
        imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
        originalPrice: 59990,
        currentPrice: 11999,
        platform: "reliance-digital",
        category: "electronics",
        productUrl: "https://www.reliancedigital.in/sony-ps5-console",
        rating: 4.8,
        reviewCount: 15678,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
      {
        title: "Dell Inspiron 15 Laptop - i7 16GB RAM 512GB SSD",
        description: "12th Gen Intel Core i7, 15.6 inch FHD display, NVIDIA MX570, backlit keyboard.",
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        originalPrice: 89990,
        currentPrice: 17999,
        platform: "reliance-digital",
        category: "electronics",
        productUrl: "https://www.reliancedigital.in/dell-inspiron-15-laptop",
        rating: 4.3,
        reviewCount: 4321,
      },
      {
        title: "Panasonic 1.5 Ton 5 Star Wi-Fi Inverter AC",
        description: "Nanoe-G air purification, PM 2.5 filter, Wi-Fi enabled, 100% copper condenser.",
        imageUrl: "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=400&h=400&fit=crop",
        originalPrice: 65990,
        currentPrice: 13199,
        platform: "reliance-digital",
        category: "home",
        productUrl: "https://www.reliancedigital.in/panasonic-1-5-ton-ac",
        rating: 4.2,
        reviewCount: 6789,
      },
      {
        title: "JBL PartyBox 310 Portable Party Speaker",
        description: "240W powerful sound, dynamic light show, 18-hour battery, mic and guitar inputs, IPX4 splashproof.",
        imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        originalPrice: 49990,
        currentPrice: 9999,
        platform: "reliance-digital",
        category: "electronics",
        productUrl: "https://www.reliancedigital.in/jbl-partybox-310",
        rating: 4.6,
        reviewCount: 2345,
      },
      {
        title: "Canon EOS R6 Mirrorless Camera Body",
        description: "20.1MP full-frame CMOS sensor, 4K 60p video, in-body image stabilization, dual pixel CMOS AF II.",
        imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
        originalPrice: 215990,
        currentPrice: 43199,
        platform: "reliance-digital",
        category: "electronics",
        productUrl: "https://www.reliancedigital.in/canon-eos-r6",
        rating: 4.7,
        reviewCount: 1234,
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 350));
    return mockDeals;
  }
}

export default new RelianceDigitalService();
