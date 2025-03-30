export const runtime = 'edge'; // Mark this as an edge function

export async function POST(req: Request) {
    try {
      const { username, rating, reviewText } = await req.json();
  
      // Basic validation
      if (!username || !rating || !reviewText) {
        return new Response(JSON.stringify({ error: "All fields are required." }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      // Simulated saving (replace with a real database)
      const newReview = { username, rating, reviewText, createdAt: new Date() };
  
      console.log("New Review:", newReview); // Debug log
  
      return new Response(JSON.stringify({ success: true, review: newReview }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Invalid request format." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  }