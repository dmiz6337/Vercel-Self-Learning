import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma || new PrismaClient(); // Avoid creating a new client in serverless

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma; // Reuse Prisma client in dev

export default prisma;