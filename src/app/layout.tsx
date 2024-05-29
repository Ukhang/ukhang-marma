import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Footer, Navbar } from "@/components/Global";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Toaster position="top-right" />
        <div className="w-full flex flex-col min-h-screen bg-secondary">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
