import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "nodejs",
  regions: ["syd1"] // Specify deployment region
};

export async function GET(req: NextRequest) {
  console.log("Running daily task...");
  return NextResponse.json({ message: "Task executed successfully" });
}