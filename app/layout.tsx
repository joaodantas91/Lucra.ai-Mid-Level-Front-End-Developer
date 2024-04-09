import CssBaseline from '@mui/material/CssBaseline';

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CssBaseline />
      <body >{children}</body>
    </html>
  );
}
