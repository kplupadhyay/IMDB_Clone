import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "A movie app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />

          {children}
        </Provider>
      </body>
    </html>
  );
}
