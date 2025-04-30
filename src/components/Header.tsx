"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#f3f8fb] shadow-sm">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ebf91] to-[#72dfd0] font-bold text-lg">
        nowfluence
      </h1>

      <nav className="space-x-6 text-sm font-medium">
        <Link href="#" className="text-gray-700 font-semibold hover:underline">
          Sign Up
        </Link>
        <Link
          href="#"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#5bbcf3] to-[#55c7f0] font-semibold hover:underline"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
