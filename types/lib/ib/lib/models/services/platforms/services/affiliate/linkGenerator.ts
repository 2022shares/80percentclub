import { Platform, IAffiliateLink } from "@/types";
import { PLATFORM_CONFIGS } from "@/services/platforms";

export class AffiliateLinkGenerator {
  static generate(productUrl: string, platform: Platform): IAffiliateLink {
    const config = PLATFORM_CONFIGS[platform];
    
    if (!config) {
      throw new Error(`Unsupported platform: ${platform}`);
    }

    const url = new URL(productUrl);
    url.searchParams.set(config.affiliateParam, config.affiliateTag);
    url.searchParams.set("utm_medium", "affiliate");
    url.searchParams.set("utm_campaign", "80percentclub");

    return {
      originalUrl: productUrl,
      affiliateUrl: url.toString(),
      platform,
      generatedAt: new Date(),
    };
  }

  static generateBatch(
    deals: { productUrl: string; platform: Platform }[]
  ): IAffiliateLink[] {
    return deals.map((deal) => this.generate(deal.productUrl, deal.platform));
  }

  static validateUrl(url: string): { valid: boolean; platform?: Platform } {
    try {
      const parsed = new URL(url);
      const hostname = parsed.hostname.toLowerCase();

      if (hostname.includes("amazon.in") || hostname.includes("amazon.com")) {
        return { valid: true, platform: "amazon" };
      }
      if (hostname.includes("flipkart.com")) {
        return { valid: true, platform: "flipkart" };
      }
      if (hostname.includes("meesho.com")) {
        return { valid: true, platform: "meesho" };
      }
      if (hostname.includes("myntra.com")) {
        return { valid: true, platform: "myntra" };
      }
      if (hostname.includes("ajio.com")) {
        return { valid: true, platform: "ajio" };
      }

      return { valid: false };
    } catch {
      return { valid: false };
    }
  }
}
