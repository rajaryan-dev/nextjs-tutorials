"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utilis/client-utilis";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Client Router Page</h1>
      <h1>{result}</h1>
    </div>
  );
}
