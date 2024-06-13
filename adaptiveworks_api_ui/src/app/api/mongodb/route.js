import clientPromise from "@/app/lib/mongodb";
import logger from "@/app/logger";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("AdaptiveWorks");
  const allData = await db.collection("Metrics").find({}).toArray();
  logger.info("MongoDB -> Get All Data")
  return Response.json(allData);
 
}