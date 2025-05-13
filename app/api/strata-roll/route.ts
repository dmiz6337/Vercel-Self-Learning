import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q')?.trim() || '';

  const query: any = {
    orderBy: { unitNumber: 'asc' },
  };
  if (q) {
    query.where = {
      OR: [
        { unitNumber: { contains: q, mode: 'insensitive' } },
        { name: { contains: q, mode: 'insensitive' } },
        { email: { contains: q, mode: 'insensitive' } },
        { phone: { contains: q, mode: 'insensitive' } },
        // Only filter entitlement if q is a valid number
        ...(isNaN(Number(q)) ? [] : [{ entitlement: { equals: Number(q) } }]),
      ]
    };
  }

  const owners = await prisma.unitOwner.findMany(query);
  return NextResponse.json(owners);
}
