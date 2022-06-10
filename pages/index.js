import { Affix, Button, Paper, Transition } from "@mantine/core";
import Head from "next/head";
import Footer from "../components/Footer";
import GamesSection from "../components/GamesSection";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import RecentReviews from "../components/RecentReviews";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowUp } from "tabler-icons-react";

export default function Home({ data }) {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <Head>
        <title>Games Hut ~ Home</title>
        <meta
          name="description"
          content="A good app to track out new information about video games for pc and also mobile."
        />
      </Head>

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowUp />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              color="teal"
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>

      <Paper radius={0} style={{ background: "#F8F9FA" }}>
        <Navbar />
        <Hero />
      </Paper>
      <GamesSection />
      <RecentReviews />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  //const res = await fetch("http://localhost:3000/api/getGames");
  //const data = await res.json();

  return {
    props: {
      data: [],
    },
  };
}
