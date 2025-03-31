export const runtime = 'edge'; // Mark this as an edge function

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    
    // You can perform any additional logic here (e.g., payment processing)
    console.log("Received payment amount:", amount);
    const redirectUrl = "https://stripe.com";  // Redirect to Stripe homepage

    return NextResponse.redirect(redirectUrl); // Redirect the user to the desired URL

  } catch (error: any) {
    console.error("Error during payment initiation:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}