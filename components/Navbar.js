import { useState } from "react";
import {
  Anchor,
  Avatar,
  Box,
  Burger,
  Button,
  Drawer,
  Group,
  Header,
  MediaQuery,
  Menu,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { setting } from "../utility/setting";
import Link from "next/link";
import { Login, UserPlus } from "tabler-icons-react";

export const Navbar = () => {
  const [logged, setLogged] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="lg"
        title="Menu"
      >
        {setting.navlink.map((emon) => {
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
                <Text size="sm">{emon.title}</Text>
              </UnstyledButton>
            </Link>
          );
        })}
      </Drawer>

      <Header style={{ background: "unset" }}>
        <Box sx={{ maxWidth: "90%", padding: "10px" }} mx="auto">
          <Group spacing="xl" style={{ justifyContent: "space-between" }}>
            <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
              <Box>
                <Burger onClick={() => setOpened(true)} />
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
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Group position="center" spacing="md">
                {setting.navlink.map((emu) => {
                  return (
                    <Link href={emu.url} key={emu.id} passHref>
                      <Text
                        sx={{
                          cursor: "pointer",
                        }}
                        size={"sm"}
                        weight={400}
                        color={"dark"}
                      >
                        {emu.title}
                      </Text>
                    </Link>
                  );
                })}
              </Group>
            </MediaQuery>
            <Box>
              {logged ? (
                <Group spacing="lg">
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
              ) : (
                <>
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Menu
                      control={
                        <Avatar color="teal" radius="xl">
                          <Text>J</Text>
                        </Avatar>
                      }
                    >
                      <Menu.Label>Action</Menu.Label>
                      <Menu.Item icon={<Login />}>
                        <Link href={"/login"} passHref>
                          <Text>Login</Text>
                        </Link>
                      </Menu.Item>
                      <Menu.Item icon={<UserPlus />}>
                        <Link href={"/signup"} passHref>
                          <Text>Sign Up</Text>
                        </Link>
                      </Menu.Item>
                    </Menu>
                  </MediaQuery>
                  <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Group spacing="lg">
                      <Link href={"/login"} passHref>
                        <Button
                          variant="outline"
                          color="teal"
                          radius="xl"
                          size="xs"
                        >
                          Login
                        </Button>
                      </Link>
                      <Link href={"/signup"} passHref>
                        <Button
                          variant="filled"
                          color="teal"
                          radius="xl"
                          size="xs"
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </Group>
                  </MediaQuery>
                </>
              )}
            </Box>
          </Group>
        </Box>
      </Header>
    </>
  );
};
