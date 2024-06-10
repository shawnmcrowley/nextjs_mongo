import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Lycra Company",
  description: "Created by Shawm M. Crowley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased="true"`}>{children}</body>
    </html>
  );
}
