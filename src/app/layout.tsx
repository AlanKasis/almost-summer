import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import PageHeader from "@/components/page-header";
import Sidebar from "@/components/sidebar";
import PageFooter from "@/components/page-footer";
import CarouselPage from "@/components/carousel-page";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Almost Summer",
  description: "Almost Summer - Creative Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-h-screen",
          fontSans.variable
        )}
      >
        <CarouselPage />
        <div className="md:px-20">
          <PageHeader />
          <div className="flex min-h-screen w-full flex-col md:min-h-fit md:h-[calc(100vh-13rem-4rem)]">
            <main className="flex flex-col min-h-screen items-center justify-center p-8 md:min-h-fit md:p-6 md:grid md:grid-cols-2 md:h-full md:grid-rows-1">
              <div className="hidden md:block">
                <Sidebar />
              </div>
              {children}
            </main>
          </div>
          <PageFooter />
        </div>
      </body>
    </html>
  );
}
