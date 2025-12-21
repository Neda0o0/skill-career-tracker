import Navbar from "@/components/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          bg-white dark:bg-gray-950
          text-gray-900 dark:text-gray-100
          pt-16
        "
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
