import { Platform, IRawDeal, Category } from "@/types";
import { IPlatformService } from "./index";

class MeeshoService implements IPlatformService {
  private platform: Platform = "meesho";

  getPlatform(): Platform {
    return this.platform;
  }

  async fetchDeals(): Promise<IRawDeal[]> {
    return this.fetchMockDeals();
  }

  private async fetchMockDeals(): Promise<IRawDeal[]> {
    const mockDeals: IRawDeal[] = [
      {
        title: "Women's Embroidered Cotton Kurti with Palazzo Set",
        description: "Pure cotton fabric, intricate hand embroidery, comfortable palazzo pants, dupatta included.",
        imageUrl: "https://images.unsplash.com/photo-1610030469983-98e36091f324?w=400&h=400&fit=crop",
        originalPrice: 2499,
        currentPrice: 499,
        platform: "meesho",
        category: "fashion",
        productUrl: "https://www.meesho.com/embroidered-kurti-set",
        rating: 4.1,
        reviewCount: 8765,
      },
      {
        title: "Men's Slim Fit Formal Shirt Pack of 3",
        description: "Premium cotton blend, wrinkle-free, modern slim fit, assorted colors.",
        imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
        originalPrice: 2999,
        currentPrice: 599,
        platform: "meesho",
        category: "fashion",
        productUrl: "https://www.meesho.com/formal-shirt-pack-3",
        rating: 4.0,
        reviewCount: 5432,
      },
      {
        title: "Stylish Women's Handbag - PU Leather Tote",
        description: "Spacious compartments, detachable shoulder strap, gold-tone hardware, 5 colors available.",
        imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
        originalPrice: 1999,
        currentPrice: 399,
        platform: "meesho",
        category: "fashion",
        productUrl: "https://www.meesho.com/pu-leather-tote-bag",
        rating: 4.2,
        reviewCount: 1234,
      },
      {
        title: "Home Decor Wall Stickers - 3D Butterfly Set of 12",
        description: "PVC material, waterproof, easy to apply and remove, mirror effect.",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
        originalPrice: 999,
        currentPrice: 199,
        platform: "meesho",
        category: "home",
        productUrl: "https://www.meesho.com/3d-butterfly-wall-stickers",
        rating: 4.3,
        reviewCount: 6789,
      },
      {
        title: "Wireless Bluetooth Earbuds - TWS with Charging Case",
        description: "Touch controls, 24-hour total playback, IPX4 water resistant, noise cancellation.",
        imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop",
        originalPrice: 4999,
        currentPrice: 999,
        platform: "meesho",
        category: "electronics",
        productUrl: "https://www.meesho.com/tws-bluetooth-earbuds",
        rating: 3.9,
        reviewCount: 4567,
      },
      {
        title: "Kitchen Storage Container Set - 24 Pcs Airtight",
        description: "BPA-free plastic, stackable design, airtight lids, microwave safe.",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
        originalPrice: 2999,
        currentPrice: 599,
        platform: "meesho",
        category: "home",
        productUrl: "https://www.meesho.com/kitchen-container-set-24",
        rating: 4.4,
        reviewCount: 3456,
      },
      {
        title: "Women's Running Shoes - Lightweight Mesh",
        description: "Breathable mesh upper, cushioned insole, anti-skid rubber sole.",
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        originalPrice: 3499,
        currentPrice: 699,
        platform: "meesho",
        category: "fashion",
        productUrl: "https://www.meesho.com/womens-running-shoes",
        rating: 4.0,
        reviewCount: 2345,
      },
      {
        title: "Kids Educational Toy Laptop - 65 Activities",
        description: "Interactive learning, English and math games, LED display, musical keyboard.",
        imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop",
        originalPrice: 2499,
        currentPrice: 499,
        platform: "meesho",
        category: "toys",
        productUrl: "https://www.meesho.com/kids-educational-laptop",
        rating: 4.5,
        reviewCount: 5678,
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 200));
    return mockDeals;
  }
}

export default new MeeshoService();
