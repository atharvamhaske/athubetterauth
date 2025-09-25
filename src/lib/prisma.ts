import { PrismaClient } from "@/src/generated/prisma";

// For global singleton
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};


if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL environment variable is not set");
  console.warn("Please set DATABASE_URL in your .env file or deployment environment");
}

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