/**
 * Database Seeding Script
 * Populates MongoDB with initial mock deals for testing
 * 
 * Usage: npm run seed
 */
import { connectDB, disconnectDB } from "@/lib/db";
import Deal from "@/lib/models/Deal";
import { aggregateAllDeals } from "@/services/platforms";
import { AffiliateLinkGenerator } from "@/services/affiliate/linkGenerator";

async function seed() {
  console.log("Starting database seed...\n");

  try {
    await connectDB();
    
    // Clear existing deals
    const deleted = await Deal.deleteMany({});
    console.log(`Cleared ${deleted.deletedCount} existing deals`);

    // Fetch from all platform services (mock data)
    console.log("Fetching deals from all platforms...\n");
    const rawDeals = await aggregateAllDeals();

    let successCount = 0;
    let failCount = 0;

    for (const raw of rawDeals) {
      try {
        const affiliate = AffiliateLinkGenerator.generate(
          raw.productUrl,
          raw.platform
        );

        await Deal.create({
          ...raw,
          affiliateUrl: affiliate.affiliateUrl,
          isActive: true,
        });
        successCount++;
      } catch (error) {
        console.error(`Failed to insert: ${raw.title}`, error);
        failCount++;
      }
    }

    const total = await Deal.countDocuments();
    console.log(`\nSeed complete!`);
    console.log(`   Inserted: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log(`   Total in DB: ${total}`);

  } catch (error) {
    console.error("\nSeed failed:", error);
    process.exit(1);
  } finally {
    await disconnectDB();
  }
}

seed();
