// app/layout.tsx
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Specialty Coffee Roastery",
  description: "Website demo with custom JS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Nội dung trang con (page.tsx) sẽ được render ở đây */}
        {children}

        {/* Gắn script.js từ thư mục public/ */}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

