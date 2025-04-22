"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl dark:text-gray-100">Strata Committee Body Corporate</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/Payments"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Payments
              </Link>
            </li>
            <li>
              <Link
                href="/Information"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Information
              </Link>
            </li>
            <li>
              <Link
                href="/Inquire"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Inquire
              </Link>
            </li>
            <li>
              <Link
                href="/api/strata-roll.php"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Strata Roll
              </Link>
            </li>
            <li>
              <Link
                href="/Reviews"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Reviews
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => signIn('github')}
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Sign In
              </button>
            )}
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
}
