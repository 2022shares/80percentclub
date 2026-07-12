import { Platform, IRawDeal, Category } from "@/types";
import { IPlatformService } from "./index";

class FlipkartService implements IPlatformService {
  private platform: Platform = "flipkart";

  getPlatform(): Platform {
    return this.platform;
  }

  async fetchDeals(): Promise<IRawDeal[]> {
    return this.fetchMockDeals();
  }

  private async fetchMockDeals(): Promise<IRawDeal[]> {
    const mockDeals: IRawDeal[] = [
      {
        title: "Poco X6 Pro 5G (Yellow, 256 GB) - 12 GB RAM",
        description: "Dimensity 8300-Ultra, 120Hz AMOLED display, 64MP triple camera, 67W fast charging.",
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        originalPrice: 31999,
        currentPrice: 5999,
        platform: "flipkart",
        category: "electronics",
        productUrl: "https://www.flipkart.com/poco-x6-pro-5g",
        rating: 4.3,
        reviewCount: 4567,
        expiresAt: new Date(Date.now() + 36 * 60 * 60 * 1000),
      },
      {
        title: "Realme GT Neo 3 5G (Sprint White, 256 GB)",
        description: "Dimensity 8100, 150W UltraDart Charge, 50MP Sony IMX766 OIS camera.",
        imageUrl: "https://images.unsplash.com/photo-1598327773200-8a6f0c7d7c7e?w=400&h=400&fit=crop",
        originalPrice: 42999,
        currentPrice: 8499,
        platform: "flipkart",
        category: "electronics",
        productUrl: "https://www.flipkart.com/realme-gt-neo-3",
        rating: 4.4,
        reviewCount: 3892,
      },
      {
        title: "Noise ColorFit Pro 4 Alpha Smartwatch",
        description: "1.78 inch AMOLED display, Bluetooth calling, 100+ sports modes, 7-day battery.",
        imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
        originalPrice: 7999,
        currentPrice: 1499,
        platform: "flipkart",
        category: "electronics",
        productUrl: "https://www.flipkart.com/noise-colorfit-pro-4",
        rating: 4.1,
        reviewCount: 12345,
      },
      {
        title: "Levi's Men's 511 Slim Fit Jeans - Dark Indigo",
        description: "Premium stretch denim, classic 5-pocket styling, slim fit through thigh.",
        imageUrl: "https://images.unsplash.com/photo-1542272617-08f086302542?w=400&h=400&fit=crop",
        originalPrice: 3999,
        currentPrice: 799,
        platform: "flipkart",
        category: "fashion",
        productUrl: "https://www.flipkart.com/levis-511-slim-fit-jeans",
        rating: 4.2,
        reviewCount: 5678,
      },
      {
        title: "Prestige Omega Deluxe Granite Cookware Set - 5 Pcs",
        description: "Granite finish non-stick, induction base, 5-layer coating, PFOA free.",
        imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop",
        originalPrice: 5495,
        currentPrice: 1099,
        platform: "flipkart",
        category: "home",
        productUrl: "https://www.flipkart.com/prestige-omega-cookware",
        rating: 4.5,
        reviewCount: 9876,
      },
      {
        title: "Wildcraft Daypack Laptop Backpack - 35L",
        description: "Water-resistant, padded laptop compartment, ergonomic back support.",
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        originalPrice: 3499,
        currentPrice: 699,
        platform: "flipkart",
        category: "fashion",
        productUrl: "https://www.flipkart.com/wildcraft-daypack-backpack",
        rating: 4.3,
        reviewCount: 4321,
      },
      {
        title: "Havells Stealth Air Cooler - 50L",
        description: "Honeycomb cooling pads, 4-way air deflection, inverter compatible, remote control.",
        imageUrl: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&h=400&fit=crop",
        originalPrice: 12999,
        currentPrice: 2599,
        platform: "flipkart",
        category: "home",
        productUrl: "https://www.flipkart.com/havells-stealth-air-cooler",
        rating: 4.0,
        reviewCount: 2345,
      },
      {
        title: "Yonex Astrox 99 Play Badminton Racket",
        description: "Graphite frame, Rotational Generator System, built-in T-joint.",
        imageUrl: "https://images.unsplash.com/photo-1626224583764-8478ab2e1539?w=400&h=400&fit=crop",
        originalPrice: 8990,
        currentPrice: 1799,
        platform: "flipkart",
        category: "sports",
        productUrl: "https://www.flipkart.com/yonex-astrox-99",
        rating: 4.6,
        reviewCount: 1876,
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 250));
    return mockDeals;
  }
}

export default new FlipkartService();
