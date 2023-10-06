import Navbar from "@/components/Navbar";
import { ToastProvider } from "@/providers/toast-provider";
import { ChakraProvider } from "@chakra-ui/react";
import "app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen flex flex-col justify-center items-center">
          <ToastProvider />
          <Navbar />
          <ChakraProvider>{children}</ChakraProvider>
        </main>
      </body>
    </html>
  );
}
