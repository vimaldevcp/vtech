import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password, role } = await req.json();

  await dbConnect();

  const user = await User.findOne({ email, role });
  if (!user) return NextResponse.json({ error: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return NextResponse.json({ error: "Wrong password" });

  const token = jwt.sign({ id: user._id, role: user.role }, "secret");

  const res = NextResponse.json({ success: true });
  res.cookies.set("token", token);

  return res;
}