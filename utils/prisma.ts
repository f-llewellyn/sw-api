import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ["query"] });

if (process.env.NNODE_ENV !== "production") global.prisma = prisma;
