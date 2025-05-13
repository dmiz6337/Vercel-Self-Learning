import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// DELETE /api/payments/[id] - delete a payment
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    await prisma.payment.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Payment not found.' }, { status: 404 });
  }
}
