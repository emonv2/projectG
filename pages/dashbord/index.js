import React, { useState } from "react";
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
} from "@mantine/core";
import { setting } from "../../utility/setting";

import Link from "next/link";
import Head from "next/head";

const Dashbord = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
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
                    <Text>Jahidul</Text>
                  </MediaQuery>
                  <Menu
                    control={
                      <Avatar color="teal" radius="xl">
                        <Text>J</Text>
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
        Main Data
      </AppShell>
    </>
  );
};

export default Dashbord;
