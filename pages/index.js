import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe Collection App</title>
        <meta name="description" content="Recipe landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </>
  );
}
