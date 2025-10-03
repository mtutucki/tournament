import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turnieje",
  description: "Stworzone abyś mógł dzielić emocje ze znajomymi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${nunitoSans.className}  antialiased bg-[var(--bg-color)] text-[var(--text)]`}
      >
        {children}
      </body>
    </html>
  );
}
