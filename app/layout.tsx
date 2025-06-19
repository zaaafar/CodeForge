import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Code Forge",
  description: "AI Meets Code Collanboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50 flex flex-col min-h-screen`}>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
          <Footer />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                zIndex: 9999, // make sure it's on top
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
