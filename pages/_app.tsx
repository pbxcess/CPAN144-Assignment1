import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*Name banner/Site Name ABOVE the Navbar*/}
      <div className="brand">
        <strong>Princess Krish Anne Bernardino: An Intro</strong>
      </div>

      <Navbar />

      <main className="container">
        <Component {...pageProps} />
      </main>
      <style jsx>{`
      .brand { text-align: center; padding: 12px 16px; font-size: 1.25rem }
      .container { max-width: 920px; margin:0 auto; padding: 16px; }
      `}
      </style>
    </>
  );
}
