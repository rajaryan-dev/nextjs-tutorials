"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/react-form/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, description }),
      });
      if (response.ok) {
        router.push("/products-db");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-6 space-y-5 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300"
      >
        <label className="block text-gray-800 dark:text-gray-100 font-medium">
          Title
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </label>

        <label className="block text-gray-800 dark:text-gray-100 font-medium">
          Price
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </label>

        <label className="block text-gray-800 dark:text-gray-100 font-medium">
          Description
          <textarea
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            rows={3}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 rounded-lg transition-colors duration-200"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
