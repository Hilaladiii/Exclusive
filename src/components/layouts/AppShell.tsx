"use client";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { ReactQueryProvider } from "@/providers/tanstackProviders";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <ReactQueryProvider>
        <Navbar />
        {children}
        <Footer />
      </ReactQueryProvider>
    </main>
  );
}
