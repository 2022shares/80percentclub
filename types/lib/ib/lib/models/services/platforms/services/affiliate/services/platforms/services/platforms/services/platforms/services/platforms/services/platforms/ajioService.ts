import { Platform, IRawDeal, Category } from "@/types";
import { IPlatformService } from "./index";

class AjioService implements IPlatformService {
  private platform: Platform = "ajio";

  getPlatform(): Platform {
    return this.platform;
  }

  async fetchDeals(): Promise<IRawDeal[]> {
    return this.fetchMockDeals();
  }

  private async fetchMockDeals(): Promise<IRawDeal[]> {
    const mockDeals: IRawDeal[] = [
      {
        title: "GAP Logo Hoodie Sweatshirt - Navy Blue",
        description: "Soft fleece lining, kangaroo pocket, ribbed cuffs and hem, iconic GAP logo.",
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        originalPrice: 3999,
        currentPrice: 799,
        platform: "ajio",
        category: "fashion",
        productUrl: "https://www.ajio.com/gap-logo-hoodie-navy",
        rating: 4.4,
        reviewCount: 2345,
      },
      {
        title: "Superdry Vintage Logo T-Shirt - Optic White",
        description: "Organic cotton, signature vintage logo print, regular fit, crew neck.",
        imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop",
        originalPrice: 2999,
        currentPrice: 599,
        platform: "ajio",
        category: "fashion",
        productUrl: "https://www.ajio.com/superdry-vintage-logo-tee",
        rating: 4.3,
        reviewCount: 1234,
      },
      {
        title: "Levi's 501 Original Fit Jeans - Stonewash",
        description: "Iconic straight fit, button fly, premium denim, classic 5-pocket styling.",
        imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
        originalPrice: 4999,
        currentPrice: 999,
        platform: "ajio",
        category: "fashion",
        productUrl: "https://www.ajio.com/levis-501-original-jeans",
        rating: 4.5,
        reviewCount: 5678,
      },
      {
        title: "U.S. Polo Assn. Solid Polo T-Shirt - Red",
        description: "Pique cotton, classic polo collar, 2-button placket, embroidered logo.",
        imageUrl: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
        originalPrice: 2499,
        currentPrice: 499,
        platform: "ajio",
        category: "fashion",
        productUrl: "https://www.ajio.com/uspa-polo-tee-red",
        rating: 4.2,
        reviewCount: 3456,
      },
      {
        title: "Jack & Jones Slim Fit Denim Jacket",
        description: "Stretch denim, slim fit, button closure, chest flap pockets, vintage wash.",
        imageUrl: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=400&h=400&fit=crop",
        originalPrice: 5999,
        currentPrice: 1199,
        platform: "ajio",
        category: "fashion",
        productUrl: "https://www.ajio.com/jack-jones-denim-jacket",
        rating: 4.3,
        reviewCount: 1234,
      },
      {
        title: "Skechers Go Walk 6 Walking Shoes",
        description: "Ultra Go cushioning, breathable mesh upper, Air Cooled Goga Mat insole.",
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        originalPrice: 6999,
        currentPrice: 1399,
        platform: "ajio",
        category: "fashion",
        productUrl: "https://www.ajio.com/skechers-go-walk-6",
        rating: 4.4,
        reviewCount: 4567,
      },
      {
        title: "Arrow New York Slim Fit Formal Blazer",
        description: "Poly-viscose blend, notch lapel, 2-button closure, flap pockets, slim fit.",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop",
        originalPrice: 8999,
        currentPrice: 1799,
        platform: "ajio",
        category: "fashion",
        productUrl: "https://www.ajio.com/arrow-ny-formal-blazer",
        rating: 4.1,
        reviewCount: 876,
      },
      {
        title: "Puma Essentials Running Shorts",
        description: "DryCELL technology, elastic waistband, mesh inserts, reflective logo.",
        imageUrl: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&fit=crop",
        originalPrice: 2499,
        currentPrice: 499,
        platform: "ajio",
        category: "fashion",
        productUrl: "https://www.ajio.com/puma-essentials-shorts",
        rating: 4.2,
        reviewCount: 2345,
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 220));
    return mockDeals;
  }
}

export default new AjioService();
