import { PrismaClient } from "@/src/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";


const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};


if (process.env.NODE_ENV === "production") {
  // If DATABASE_URL is missing or not in the correct format for Prisma Accelerate
  if (!process.env.DATABASE_URL || !process.env.DATABASE_URL.startsWith('prisma://')) {
    console.warn("Setting up Prisma Accelerate for production");
    process.env.DATABASE_URL = "prisma://accelerate.prisma-data.net/?api_key=demo";
  }
} else if (!process.env.DATABASE_URL) {
  // For development, use SQLite if no database URL is provided
  console.warn("Using local SQLite database for development");
  process.env.DATABASE_URL = "file:./dev.db";
}


const prismaOptions: any = {
  log: process.env.NODE_ENV === "development" 
    ? ['query', 'error', 'warn']
    : ['error'],
};


const prisma = globalForPrisma.prisma || 
  new PrismaClient(prismaOptions).$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;