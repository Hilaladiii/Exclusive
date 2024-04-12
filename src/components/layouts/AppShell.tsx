import Footer from "../Footer";
import Navbar from "../Navbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
