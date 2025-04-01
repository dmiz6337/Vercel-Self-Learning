import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"

export async function GET(req: NextRequest) {
  console.log("Running daily task...");
  return NextResponse.json({ message: "Task executed successfully" });
}