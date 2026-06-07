export async function POST(req) {
  const { message } = await req.json();

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: message }]
          }
        ]
      })
    }
  );

  const data = await response.json();

  return Response.json({
    reply: JSON.stringify(data, null, 2)
  });
}
