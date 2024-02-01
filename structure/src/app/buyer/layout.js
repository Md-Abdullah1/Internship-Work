import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BigBaskit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
