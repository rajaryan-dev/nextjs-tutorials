"use client";

import { useState } from "react";

export default function DashboardPage() {
  console.log("DashboardPage - Client Component");
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-black rounded px-2 py-1 text-black"
      />
      <p className="text-2xl mt-4">Hello, {name ? name : "Guest"}!</p>
    </div>
  );
}
