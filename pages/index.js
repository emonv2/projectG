import { Paper } from "@mantine/core";
import Head from "next/head";
import Footer from "../components/Footer";
import GamesSection from "../components/GamesSection";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import RecentReviews from "../components/RecentReviews";
import { useEffect, useState } from "react";

export default function Home({ games, section }) {
  return (
    <div>
      <Head>
        <title>Games Hut ~ Home</title>
        <meta
          name="description"
          content="A good app to track out new information about video games for pc and also mobile."
        />
      </Head>

      <Paper radius={0} style={{ background: "#F8F9FA" }}>
        <Navbar />
        <Hero game={games} key={games.data[0]._id} />
      </Paper>
      <GamesSection gameSec={section} />
      <RecentReviews />

      <Footer />
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const options = {
    method: "GET",
  };

  const resData = await fetch(
    "https://gamerhubapi.herokuapp.com/games/featureGames",
    options
  );

  const resData2 = await fetch(
    "https://gamerhubapi.herokuapp.com/games/section",
    options
  );

  const data = await resData.json();
  const data2 = await resData2.json();

  return { props: { games: data, section: data2 } };
};
