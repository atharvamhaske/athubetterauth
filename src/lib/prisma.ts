import { PrismaClient } from "@/src/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// Check for DATABASE_URL
if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  console.error("Warning: DATABASE_URL environment variable is not set");
  // For production, we'll let this error out naturally
  // For development, you could set a default here if needed
}

// Initialize Prisma Client
const prisma = globalForPrisma.prisma || 
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    // In development, you could use a fallback URL if needed
    // datasources: process.env.NODE_ENV !== "production" && !process.env.DATABASE_URL
    //   ? { db: { url: "file:./dev.db" } }
    //   : undefined,
  }).$extends(withAccelerate());

// Set the prisma global object in development
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;