import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
export const dynamic = "force-dynamic";
const prisma = new PrismaClient();

// GET /api/payments - fetch all payments
export async function GET() {
  const payments = await prisma.payment.findMany({ orderBy: { createdAt: 'desc' } });
  return new NextResponse(JSON.stringify(payments), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store',
    },
  });
}
