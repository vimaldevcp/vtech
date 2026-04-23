import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";

export async function PUT(req: Request) {
  const { id, price } = await req.json();

  await dbConnect();
  await Product.findByIdAndUpdate(id, { price });

  return NextResponse.json({ success: true });
}