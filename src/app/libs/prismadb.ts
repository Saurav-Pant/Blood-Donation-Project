import { PrismaClient } from '@prisma/client';

const client: PrismaClient = (globalThis as any).prisma || new PrismaClient();

export default client;
