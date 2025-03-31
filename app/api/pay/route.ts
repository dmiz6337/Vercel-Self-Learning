export const runtime = 'edge'; // Mark this as an edge function

import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    try {
        const { amount } = await req.json();
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: { name: "Custom Payment" },
                        unit_amount: parseInt(amount) * 100, // Convert to cents
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-failed`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}