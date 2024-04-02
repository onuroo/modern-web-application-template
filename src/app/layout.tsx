import type { Metadata } from "next";
import "./styles/globals.css";
import { AppProvider } from "../contexts/app.context";

import NavBar from "../components/navbar";
import SiderBar from "../components/sidebar";

export const metadata: Metadata = {
  title: "TurApp",
  description: "Tur Assist Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-gray-50 dark:bg-gray-800">
        <AppProvider>
          <NavBar />
          <SiderBar />
          <div
            id="main-content"
            className="relative w-full h-full bg-gray-50 lg:pl-64 lg:pt-48 dark:bg-gray-900"
          >
            <main>{children}</main>
          </div>
        </AppProvider>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
        ></script>
      </body>
    </html>
  );
}
