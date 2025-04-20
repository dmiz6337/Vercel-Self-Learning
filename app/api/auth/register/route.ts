import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
  const { email, password, name } = await req.json();

  if (!email || !password || !name) {
    return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
  }

  const hashedPassword = await hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error("Error creating user: ", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
}