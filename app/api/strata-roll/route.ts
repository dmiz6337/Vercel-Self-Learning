import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const owners = await prisma.UnitOwner.findMany({ orderBy: { unitNumber: 'asc' } });
  return NextResponse.json(owners);
}
