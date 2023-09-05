import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/navbar/NavBar";
import Banner from "@/components/home/Banner";
import Services from "@/components/services/Services";
import LinkHome from "@/components/LinkHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sara Vedic Sould</title>
        <meta name="description" content="Astrology and Āyurveda vibes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://joana-personal-website.s3.eu-central-1.amazonaws.com/sara-vedic-soul/logo-sembackground.png"
        />
      </Head>
      <main>
        <NavBar />
        <Banner />
        <Services />
        <LinkHome />
      </main>
    </>
  );
}
