import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Yogita Gupta | Full Stack Developer",
  description:
    "Portfolio of Yogita Gupta — Full Stack Developer and Flutter Developer building web, real-time and mobile applications.",
  keywords: [
    "Yogita Gupta",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "Flutter Developer",
    "React Developer"
  ],
  openGraph: {
    title: "Yogita Gupta | Full Stack Developer",
    description: "Full Stack Developer & Flutter Developer portfolio.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
