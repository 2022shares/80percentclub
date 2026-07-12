import { Platform, IRawDeal, IPlatformConfig } from "@/types";
import amazonService from "./amazonService";
import flipkartService from "./flipkartService";
import meeshoService from "./meeshoService";
import myntraService from "./myntraService";
import ajioService from "./ajioService";

export const PLATFORM_CONFIGS: Record<Platform, IPlatformConfig> = {
  amazon: {
    name: "Amazon",
    logo: "/logos/amazon.svg",
    color: "#FF9900",
    baseUrl: "https://www.amazon.in",
    affiliateParam: "tag",
    affiliateTag: process.env.AFFILIATE_TAG_AMAZON || "80percentclub-21",
  },
  flipkart: {
    name: "Flipkart",
    logo: "/logos/flipkart.svg",
    color: "#2874F0",
    baseUrl: "https://www.flipkart.com",
    affiliateParam: "affid",
    affiliateTag: process.env.AFFILIATE_TAG_FLIPKART || "80percentclub",
  },
  meesho: {
    name: "Meesho",
    logo: "/logos/meesho.svg",
    color: "#F43397",
    baseUrl: "https://www.meesho.com",
    affiliateParam: "rcm",
    affiliateTag: process.env.AFFILIATE_TAG_MEESHO || "80percentclub",
  },
  myntra: {
    name: "Myntra",
    logo: "/logos/myntra.svg",
    color: "#EE5F73",
    baseUrl: "https://www.myntra.com",
    affiliateParam: "utm_source",
    affiliateTag: process.env.AFFILIATE_TAG_MYNTRA || "80percentclub",
  },
  ajio: {
    name: "AJIO",
    logo: "/logos/ajio.svg",
    color: "#2C4152",
    baseUrl: "https://www.ajio.com",
    affiliateParam: "utm_source",
    affiliateTag: process.env.AFFILIATE_TAG_AJIO || "80percentclub",
  },
};

export interface IPlatformService {
  fetchDeals(): Promise<IRawDeal[]>;
  getPlatform(): Platform;
}

const services: IPlatformService[] = [
  amazonService,
  flipkartService,
  meeshoService,
  myntraService,
  ajioService,
];

export async function aggregateAllDeals(): Promise<IRawDeal[]> {
  console.log("Starting deal aggregation from all platforms...");

  const results = await Promise.allSettled(
    services.map((service) => service.fetchDeals())
  );

  const allDeals: IRawDeal[] = [];
  const errors: { platform: string; error: string }[] = [];

  results.forEach((result, index) => {
    const platform = services[index].getPlatform();
    if (result.status === "fulfilled") {
      console.log(`${platform}: Fetched ${result.value.length} deals`);
      allDeals.push(...result.value);
    } else {
      console.error(`${platform}: ${result.reason}`);
      errors.push({ platform, error: String(result.reason) });
    }
  });

  const validDeals = allDeals.filter((deal) => {
    const discount = ((deal.originalPrice - deal.currentPrice) / deal.originalPrice) * 100;
    return discount >= 80;
  });

  console.log(`Total deals: ${allDeals.length}, Valid (>=80%): ${validDeals.length}`);
  
  if (errors.length > 0) {
    console.warn(`${errors.length} platform(s) failed:`, errors);
  }

  return validDeals;
}

export { amazonService, flipkartService, meeshoService, myntraService, ajioService };
