"use client";
//import { Submit } from "@/components/submit";

import { useActionState } from "react";
import { FormState, createProduct } from "@/actions/products";
export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <div>
      <form
        action={formAction}
        className="p-6 space-y-5 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300"
      >
        <div>
          <label className="block text-gray-800 dark:text-gray-100 font-medium">
            Title
            <input
              type="text"
              name="title"
              className="mt-1 block w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </label>
          {state.errors.title && (
            <p className="text-red-500">{state.errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-800 dark:text-gray-100 font-medium">
            Price
            <input
              type="number"
              name="price"
              className="mt-1 block w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </label>
          {state.errors.price && (
            <p className="text-red-500">{state.errors.price}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-800 dark:text-gray-100 font-medium">
            Description
            <textarea
              name="description"
              className="mt-1 block w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              rows={3}
            />
          </label>
          {state.errors.description && (
            <p className="text-red-500">{state.errors.description}</p>
          )}
        </div>

        {/* <Submit /> */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full p-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 rounded-lg transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
