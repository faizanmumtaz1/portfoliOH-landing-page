// "use client";
import LandingPage from "./pages/landingPage/LandingPage";
import './globals.css'
import Head from "next/head";

export const metadata = {
  title: "PortfoliOH",
};

export default function Home() {
  return   <>
 
 <Head>
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
</Head>
  <LandingPage />
  </>;
}
