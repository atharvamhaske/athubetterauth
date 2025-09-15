import { PrismaClient } from "@/src/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// Initialize Prisma Client
const prisma = globalForPrisma.prisma || 
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  }).$extends(withAccelerate());

// Set the prisma global object in development
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;