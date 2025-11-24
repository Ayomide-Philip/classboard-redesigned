import { connectDatabase } from "@/libs/connectDatabase";
import { NextResponse } from "next/server";

export async function POST() {
  await connectDatabase();
  return NextResponse.json({ message: "Add a new user" });
}
