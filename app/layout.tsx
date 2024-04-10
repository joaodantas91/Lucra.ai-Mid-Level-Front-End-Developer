'use client';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <CssBaseline />
        <body >{children}</body>
      </html>
    </QueryClientProvider>
  );
}
