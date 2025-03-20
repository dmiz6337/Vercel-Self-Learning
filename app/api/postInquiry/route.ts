export const runtime = 'edge'; // Mark this as an edge function

export async function POST(request: Request) {
  const body = await request.json();
  const { message } = body;

  if (!message || message.trim().length === 0) {
    return new Response(JSON.stringify({ message: 'Inquiry cannot be empty.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Example processing (e.g., save to DB, send email)
  console.log('New inquiry:', message);

  return new Response(JSON.stringify({ message: 'Inquiry received successfully!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}