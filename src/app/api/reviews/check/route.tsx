import { NextResponse } from "next/server";
const allowedOrigins = ["https://dp-psu.vercel.app", "http://localhost:3000"];

export async function POST(req: Request) {
  if (!allowedOrigins.includes(req.headers.get("origin")!))
    return new NextResponse(null, { status: 403, statusText: "Forbidden" });

  const { _option, _name, _rating, review } = await req.json();

  // TODO process review
  const perspectiveReq = await fetch(
    `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${process.env.PERSPECTIVE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: { text: review },
        languages: ["en"],
        requestedAttributes: { TOXICITY: {}, SPAM: {}, PROFANITY: {} },
      }),
    }
  );

  const data = await perspectiveReq.json();
  const scores = Object.entries(data.attributeScores).map(([key, value]) => [
    key,
    Object.entries(value as Object)[1][1].value,
  ]);

  // check toxicity
  if (scores[0][1] > 0.7)
    return new NextResponse(null, {
      status: 400,
      statusText: "Toxicity threshold exceeeded",
    });
  // check spam
  if (scores[1][1] > 0.5)
    return new NextResponse(null, {
      status: 400,
      statusText: "Spam threshold exceeeded",
    });
  // check profanity
  if (scores[2][1] > 0.7)
    return new NextResponse(null, {
      status: 400,
      statusText: "Profanity threshold exceeeded",
    });

  return new NextResponse(null, {
    status: 200,
    statusText: "OK to submit review.",
  });
}
