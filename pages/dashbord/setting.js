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
  Title,
  Divider,
  Input,
  PasswordInput,
  Button,
  LoadingOverlay,
  InputWrapper,
} from "@mantine/core";
import { getAlert, setting } from "../../utility/setting";

import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import { At, Key, User } from "tabler-icons-react";
import Router from "next/router";
import { useInputState } from "@mantine/hooks";
import axios from "axios";
import Head from "next/head";

const Setting = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [userName, setUserName] = useInputState("");
  const [userMail, setUserMail] = useState("example@mail.com");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useInputState("");
  const [repass, setRePass] = useInputState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setUserMail(getCookie("email"));
    setToken(getCookie("token"));
    setUserId(getCookie("userid"));
  }, []);

  const handleSubmit = () => {
    if (!userName && !pass && !repass && pass !== repass && !token) {
      getAlert(["Error!", "Something went wrong!"]);
    } else {
      const options = {
        method: "PUT",
        url: `https://gamerhubapi.herokuapp.com/user/update/${userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: { username: userName, password: pass },
      };

      axios
        .request(options)
        .then(function (res) {
          setVisible(false);
          deleteCookie("email");
          deleteCookie("userid");
          deleteCookie("token");
          Router.push("/login");
        })
        .catch(function (error) {
          getAlert(["Error!", "Something went wrong!"]);
        });
    }
  };

  return (
    <>
      <Head>
        <title>Games Hut ~ Update Profile</title>
        <meta
          name="Update Profile ~ Games Hut"
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
          <LoadingOverlay
            loaderProps={{ size: "lg", color: "white" }}
            visible={visible}
            overlayOpacity={0.6}
            overlayColor={"teal"}
          />
          <Title
            order={2}
            sx={(theme) => ({
              textTransform: "uppercase",

              "@media (max-width: 755px)": {
                fontSize: theme.fontSizes.md,
              },
            })}
          >
            Update Profile
          </Title>
          <Divider my="lg" variant="dashed" />
          <InputWrapper
            label="User Name"
            description="Please enter your new user name."
          >
            <Input
              icon={<User />}
              placeholder="Username"
              sx={(theme) => ({
                width: "70%",
                marginBottom: "10px",

                "@media (max-width: 755px)": {
                  width: "100%",
                },
              })}
              value={userName}
              onChange={setUserName}
            />
          </InputWrapper>
          <InputWrapper
            label="Password"
            description="Please enter your new password."
          >
            <PasswordInput
              icon={<Key />}
              placeholder="Password"
              value={pass}
              onChange={setPass}
              sx={(theme) => ({
                width: "70%",
                marginBottom: "1rem",

                "@media (max-width: 755px)": {
                  width: "100%",
                },
              })}
            />
          </InputWrapper>
          <InputWrapper
            label="ReType Password"
            description="Please enter your password again"
          >
            <PasswordInput
              icon={<Key />}
              placeholder="Re-Type Password"
              value={repass}
              onChange={setRePass}
              sx={(theme) => ({
                width: "70%",
                marginBottom: "1rem",

                "@media (max-width: 755px)": {
                  width: "100%",
                },
              })}
            />
          </InputWrapper>
          <Button
            sx={(theme) => ({
              marginBottom: "1rem",
              textDecoration: "uppercase",
              background: "teal",

              "@media (max-width: 755px)": {
                width: "100%",
              },
            })}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </Box>
      </AppShell>
    </>
  );
};

export default Setting;
