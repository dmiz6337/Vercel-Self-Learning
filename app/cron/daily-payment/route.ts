import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addDailyPayment() {
  await prisma.payment.create({
    data: {
      description: 'Automated daily payment',
      amount: 100,
      createdAt: new Date(),
    },
  });
  return NextResponse.json({ success: true, message: 'Daily payment added!' });
}

export async function GET() {
  return addDailyPayment();
}

export async function POST() {
  return addDailyPayment();
}