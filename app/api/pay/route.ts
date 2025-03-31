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

    // If the amount is valid, redirect the user to the Stripe homepage
    const redirectUrl = "https://stripe.com";  // Redirect to Stripe homepage

    return NextResponse.json({ url: redirectUrl });

  } catch (error: any) {
    console.error("Error during payment initiation:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}