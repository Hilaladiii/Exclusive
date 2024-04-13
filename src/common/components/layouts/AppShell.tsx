"use client";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactQueryProvider } from "@/providers/TanstackProviders";
import { NextAuthProvider } from "@/providers/NextAuthProvider";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NextAuthProvider>
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </NextAuthProvider>
    </main>
  );
}
