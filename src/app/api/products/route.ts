import { NextResponse } from 'next/server';
import { connect } from '@/dbconfig/dbconfig';  // Adjust the import path as per your setup
import Product from '@/models/Product';

export async function GET() {
  try {
    await connect();
    const products = await Product.find({});
    return NextResponse.json(products); // Send products data as JSON response
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}
