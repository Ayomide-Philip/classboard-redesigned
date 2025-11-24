import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Welcome to Classora Api" },
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
