import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST /api/cron/weekly-payment - run by Vercel cron
export async function POST() {
  try {
    await prisma.payment.create({
      data: {
        description: 'Automated weekly payment',
        amount: 100, // Change as needed
        createdAt: new Date(),
      },
    });
    return NextResponse.json({ success: true, message: 'Weekly payment added!' });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok' });
}
