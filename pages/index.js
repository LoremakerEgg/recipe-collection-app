import SearchFilter from "@/components/searchfilter";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Recipes from "./recipes";
import { useEffect, useState } from "react";
import { useResultContext } from "@/context/resultArray";

export default function Home() {
  const { resultArray, setResultArray } = useResultContext();
  const [renderRecipes, setRenderRecipes] = useState(false);

  useEffect(() => {
    setRenderRecipes(true);
  }, [resultArray]);

  useEffect(() => {
    setRenderRecipes(false);
  }, []);

  //console.log(renderRecipes);
  if (!renderRecipes)
    return (
      <>
        <Head>
          <title>Recipe Collection App</title>
          <meta name="description" content="Recipe landing page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <SearchFilter />
      </>
    );
  else {
    return (
      <>
        <Head>
          <title>Recipe Collection App</title>
          <meta name="description" content="Recipe landing page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <SearchFilter />
        <Recipes />
        <br />
      </>
    );
  }
}
