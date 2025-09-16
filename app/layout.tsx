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
        <div className="container">
          {children}
        </div>

        {/* Script từ public */}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
