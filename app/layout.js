export const metadata = {
  title: "RBLX",
  description: "Game platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
