import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { option, name, rating, review } = await req.json();

  // check review for toxicity, spam, or any
  const client = new MongoClient(process.env.MONGODB_CONNECTION_URI!);

  try {
    await client.connect();

    const reviews = client.db("dp-psu-website").collection("reviews");

    const result = await reviews.insertOne({
      option: option,
      name: name,
      rating: rating,
      reviewText: review,
    });

    client.close();

    return new NextResponse(
      JSON.stringify({ message: "Review added successfully", result }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error adding review", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
