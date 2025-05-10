"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div>
        <p className="text-xs">Signed in as {session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  // If not signed in, show Google sign-in button
  return (
    <button onClick={() => signIn('google')}>
      Sign in with Google
    </button>
  );

  return <button onClick={() => signIn()}>Sign in</button>;
}