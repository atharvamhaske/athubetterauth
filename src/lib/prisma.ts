import { PrismaClient } from "@/src/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// Check for DATABASE_URL and provide a demo mode fallback
if (!process.env.DATABASE_URL) {
  if (process.env.NODE_ENV === "production") {
    console.warn("DATABASE_URL not found in production. Using in-memory SQLite for demo purposes.");
    // Set a fallback SQLite in-memory database for demo purposes
    process.env.DATABASE_URL = "file::memory:?connection_limit=1";
  } else {
    console.warn("DATABASE_URL not found in development. Using local SQLite database.");
    // Use a local SQLite file for development
    process.env.DATABASE_URL = "file:./dev.db";
  }
}

// Initialize Prisma Client with appropriate options
let prismaOptions: any = {
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
};

// For demo mode with in-memory SQLite, add special configuration
if (process.env.DATABASE_URL === "file::memory:?connection_limit=1") {
  prismaOptions = {
    ...prismaOptions,
    // Add any special options for in-memory database if needed
  };
}

// Initialize Prisma Client
const prisma = globalForPrisma.prisma || 
  new PrismaClient(prismaOptions).$extends(withAccelerate());

// Set the prisma global object in development
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;