import { Box, Title } from "@mantine/core";
import { deleteCookie } from "cookies-next";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    deleteCookie("email");
    deleteCookie("userid");
    deleteCookie("token");
  }, []);

  return (
    <>
      <Head>
        <title>Games Hut ~ Log Out Successful</title>
        <meta
          name="Log Out Successful ~ Games Hut"
          content="A good app to track out new information about video games for pc and also mobile."
        />
      </Head>
      <Box
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <Title order={2}>Log out Successfully !</Title>
        <Link href={"/login"} passHref>
          <a>Back to Login Page</a>
        </Link>
      </Box>
    </>
  );
};

export default Logout;
