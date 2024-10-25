// src/app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig"; // Ensure you have a dbConnect file for MongoDB connection
import Product from "@/models/Product"; // Ensure you have a Product model defined

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  await connect(); // Ensure you're connecting to MongoDB

  try {
    const product = await Product.findById(id); // Fetch the product from MongoDB

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error: unknown) {
    const Error = error as Error;
    return NextResponse.json({ error: Error.message }, { status: 500});
}
}
