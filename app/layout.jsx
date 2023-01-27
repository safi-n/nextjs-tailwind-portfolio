import "./globals.css";
import "../style/home.css";
import Sidebar from "@/components/shared/sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=" min-h-full min-w-full">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
