import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import { Toast, ToastProvider } from "@/components/ui/toast";

export const metadata = {
  title: "T3 CRUD",
  description: "This is my first full stack application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <ToastProvider>
            {children}

            <Toast />
          </ToastProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
