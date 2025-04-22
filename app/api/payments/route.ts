import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/payments - fetch all payments
export async function GET() {
  const payments = await prisma.payment.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(payments);
}
