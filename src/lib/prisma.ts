import { PrismaClient } from "@/src/generated/prisma";

// For global singleton
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// Check for required environment variables
if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL environment variable is not set");
  console.warn("Please set DATABASE_URL in your .env file or deployment environment");
  
  if (process.env.NODE_ENV === "development") {
    // For development only, provide a fallback to local PostgreSQL
    console.warn("Using fallback local PostgreSQL for development");
    process.env.DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/betterauth";
  }
}

// For Neon, we need both DATABASE_URL (pooled connection) and DIRECT_URL (direct connection)
// DIRECT_URL is used for migrations and schema changes
if (!process.env.DIRECT_URL && process.env.DATABASE_URL) {
  // If DATABASE_URL is set but DIRECT_URL isn't, use DATABASE_URL for both
  console.log("Setting DIRECT_URL to match DATABASE_URL");
  process.env.DIRECT_URL = process.env.DATABASE_URL;
}

// Configure logging based on environment
const prismaOptions: any = {
  log: process.env.NODE_ENV === "development" 
    ? ['error', 'warn']
    : ['error'],
};

// Create or reuse Prisma client instance
const prisma = globalForPrisma.prisma || new PrismaClient(prismaOptions);

// Save instance in development to prevent multiple connections
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;