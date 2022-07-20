import React, { useEffect, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  Group,
  Avatar,
  Menu,
  UnstyledButton,
  ThemeIcon,
  Grid,
  Stack,
  Title,
} from "@mantine/core";
import { setting } from "../../utility/setting";

import Link from "next/link";
import Head from "next/head";
import { getCookie } from "cookies-next";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Dashbord = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const [userMail, setUserMail] = useState("example@mail.com");

  const [chartData, setChartData] = useState({
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "User Posted",
        data: ["90", "502", "245", "370", "196", "656"],
        backgroundColor: ["teal"],
      },
    ],
  });

  useEffect(() => {
    setUserMail(getCookie("email"));
  }, []);

  return (
    <>
      <Head>
        <title>Games Hut ~ Dashbord</title>
        <meta
          name="Dashbord ~ Games Hut"
          content="A good app to track out new information about video games for pc and also mobile."
        />
      </Head>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Navbar.Section grow mt="xs">
              {setting.dashLink.map((emon) => {
                return (
                  <Link href={emon.url} passHref key={emon.id}>
                    <UnstyledButton
                      sx={(theme) => ({
                        display: "block",
                        width: "100%",
                        padding: theme.spacing.xs,
                        borderRadius: theme.radius.sm,
                        fontWeight: "500",
                        color:
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[0]
                            : theme.colors.gray[9],

                        "&:hover": {
                          backgroundColor:
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[6]
                              : theme.colors.gray[0],
                        },
                      })}
                    >
                      <Group>
                        <ThemeIcon color={"teal"} variant="light">
                          {emon.icon}
                        </ThemeIcon>

                        <Text size="sm">{emon.title}</Text>
                      </Group>
                    </UnstyledButton>
                  </Link>
                );
              })}
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={60} p="md" px={"xl"}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
              }}
              sx={{
                maxWidth: "90%",
                padding: "10px",
              }}
              mx="auto"
            >
              <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                <Box>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </Box>
              </MediaQuery>
              <Box>
                <Group spacing={0}>
                  <Text color={"dark"} weight={700} size={"lg"}>
                    Games
                  </Text>
                  <Text color={"teal"} weight={700} size={"lg"}>
                    Hut
                  </Text>
                </Group>
              </Box>
              <Box>
                <Group>
                  <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Text>{userMail.split("@")[0]}</Text>
                  </MediaQuery>
                  <Menu
                    control={
                      <Avatar color="teal" radius="xl">
                        <Text>{userMail.slice(0, 1).toUpperCase()}</Text>
                      </Avatar>
                    }
                  >
                    <Menu.Label>Profile</Menu.Label>
                    {setting.popUpLink.map((pop) => {
                      return (
                        <Link key={pop.id} href={pop.url} passHref>
                          <Menu.Item icon={pop.icon}>{pop.title}</Menu.Item>
                        </Link>
                      );
                    })}
                    <Menu.Label>Action</Menu.Label>
                    {setting.popLinkAc.map((pops) => {
                      return (
                        <Link key={pops.id} href={pops.url} passHref>
                          <Menu.Item icon={pops.icon}>{pops.title}</Menu.Item>
                        </Link>
                      );
                    })}
                  </Menu>
                </Group>
              </Box>
            </Box>
          </Header>
        }
      >
        <Box
          sx={{
            maxWidth: "90%",
            padding: "10px",
            background: "unset",
          }}
          mx="auto"
        >
          <Grid gutter={"xl"}>
            <Grid.Col lg={4} md={6} sm={12}>
              <Box
                p={"xl"}
                style={{
                  background: "rgb(0,90,90)",
                  background:
                    "linear-gradient(90deg, rgba(0,90,90,1) 0%, rgba(0,115,115,1) 35%, rgba(0,128,128,1) 100%)",
                  borderRadius: "10px",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                <Stack align="center" spacing="xs">
                  <Title order={2} mb={0} pb={0}>
                    GAMES
                  </Title>
                  <Text style={{ fontSize: "3rem" }}>150</Text>
                </Stack>
              </Box>
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
              <Box
                p={"xl"}
                style={{
                  background: "rgb(0,90,90)",
                  background:
                    "linear-gradient(90deg, rgba(0,90,90,1) 0%, rgba(0,115,115,1) 35%, rgba(0,128,128,1) 100%)",
                  borderRadius: "10px",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                <Stack align="center" spacing="xs">
                  <Title order={2} mb={0} pb={0}>
                    REVIEWS
                  </Title>
                  <Text style={{ fontSize: "3rem" }}>150</Text>
                </Stack>
              </Box>
            </Grid.Col>
          </Grid>
          <Box
            sx={{
              maxWidth: "70%",
              padding: "2rem 0",
              background: "unset",
            }}
            mt="xl"
          >
            <Bar data={chartData} />
          </Box>
        </Box>
      </AppShell>
    </>
  );
};

export default Dashbord;
