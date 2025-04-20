import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const userId = token?.sub ?? undefined;

  const body = await req.json();
  const { message } = body;

  if (!message || message.trim().length === 0) {
    return NextResponse.json({ message: "Inquiry cannot be empty." }, { status: 400 });
  }

  const inquiry = await prisma.inquiry.create({
    data: {
      message,
      userId,
    },
  });

  return NextResponse.json({ message: "Inquiry saved!", inquiry }, { status: 200 });
}

export const GET = async () => {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ inquiries }, { status: 200 });
}