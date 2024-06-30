import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import { Header } from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calc",
  description: "Simple React+Next Calc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
