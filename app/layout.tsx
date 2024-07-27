export const metadata = {
  title: 'NewYork Times',
  description: 'NewYork Times Bestseller',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
