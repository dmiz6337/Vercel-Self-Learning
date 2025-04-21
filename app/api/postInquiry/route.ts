import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
  try {
    // Check authentication
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token?.sub) {
      return NextResponse.json({ message: "You must be logged in to submit an inquiry." }, { status: 401 });
    }

    // Parse request body
    const body = await req.json();
    const { message } = body;

    // Validate message
    if (!message || message.trim().length === 0) {
      return NextResponse.json({ message: "Inquiry cannot be empty." }, { status: 400 });
    }

    // Create inquiry
    const inquiry = await prisma.inquiry.create({
      data: {
        message: message.trim(),
        userId: token.sub,
      },
    });

    return NextResponse.json({ message: "Inquiry saved!", inquiry }, { status: 200 });
  } catch (error) {
    console.error('Error posting inquiry:', error);
    // If it's a Prisma error, it will have a message property
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      message: "Failed to save inquiry. Please try again.", 
      error: errorMessage 
    }, { status: 500 });
  }
}

export const GET = async () => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            name: true,
            image: true
          }
        }
      }
    });

    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      message: "Failed to fetch inquiries.", 
      error: errorMessage 
    }, { status: 500 });
  }
}

export const DELETE = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ message: 'Missing inquiry id.' }, { status: 400 });
    }
    await prisma.inquiry.delete({ where: { id } });
    return NextResponse.json({ message: 'Inquiry resolved and deleted.' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Failed to delete inquiry.', error: errorMessage }, { status: 500 });
  }
};