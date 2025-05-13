"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user) {
    return (
      <div>
        <p className="text-xs">Signed in as {session.user.name}</p>
        <button
          onClick={async () => {
            await signOut({ redirect: false });
            router.push("/"); // Redirect to home after sign out
          }}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: process.env.NEXT_PUBLIC_API_URL || "/",
        })
      }
    >
      Sign in with Google
    </button>
  );
}