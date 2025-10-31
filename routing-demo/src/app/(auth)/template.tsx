"use client";

import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="m-4 p-2 border bg-white border-purple-800 text-black rounded"
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        if (isActive) {
          return (
            <span
              key={link.href}
              className="m-4 p-2 bg-gray-500 text-white rounded"
            >
              {link.name}
            </span>
          );
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            className="m-4 p-2 bg-blue-500 text-white rounded"
          >
            {link.name}
          </Link>
        );
      })}
      <h1 className=" rounded w-full text-black bg-white flex m-5 p-2">
        {children}
      </h1>
    </div>
  );
}
