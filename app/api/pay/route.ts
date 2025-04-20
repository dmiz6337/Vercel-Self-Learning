export const runtime = 'edge'; // Mark this as an edge function

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const { amount } = await req.json();
    
    // Check if the amount is valid
    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    // Redirect the user to the payment success page
    const baseUrl = new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://strata-management-vercel.vercel.app');
    const redirectUrl = new URL('/payment-success', baseUrl);

    return NextResponse.redirect(redirectUrl.toString(), 303);

  } catch (error: any) {
    console.error("Error during payment initiation:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}