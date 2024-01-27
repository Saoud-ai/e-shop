import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/navbar/index";
import { Notification } from "./components/Notification";
import AuthSession from "./components/AuthSession";
import UpdatePassword from "./components/UpdatePassword";



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
    <AuthSession>
      <html lang="en">
        <body >
          {children}
          <Notification />
          <h1 className="text-2xl">Footer</h1>
        </body>
      </html>
    </AuthSession>
  );
}
