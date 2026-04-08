import { NextResponse } from "next/server";
import { addEmail, isEmailRegistered } from "@/lib/email";
import { cn } from "@/lib/utils";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    if (isEmailRegistered(normalizedEmail)) {
      return NextResponse.json(
        { success: false, message: "You are already on the list!" },
        { status: 409 }
      );
    }

    addEmail(normalizedEmail);

    return NextResponse.json(
      { success: true, message: "You are on the list!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 }
    );
  }
}
