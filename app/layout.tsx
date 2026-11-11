import type { Metadata } from "next";
import "@fidelity-imagina/ui/styles.css";
import "./globals.css";
import { ToastProvider, THEME_INIT_SCRIPT } from "@fidelity-imagina/ui";

export const metadata: Metadata = {
  title: { default: "AVA", template: "%s · AVA" },
  description: "imagina's AI colleague. She knows how imagina works, and she'll tell you when she doesn't.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
