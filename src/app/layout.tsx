import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Campaign Page",
  description: "Pixel-perfect campaign page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
