import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <style jsx>{`
      .container { max-width: 920px; margin:0 auto; padding: 16px; }
      `}
      </style>
    </>
  );
}
