import {
  Alert,
  AspectRatio,
  Box,
  Button,
  Center,
  Checkbox,
  Grid,
  Input,
  LoadingOverlay,
  MediaQuery,
  Notification,
  Paper,
  Space,
  Title,
} from "@mantine/core";
import Image from "next/image";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { AlertCircle, At, Key, User, X } from "tabler-icons-react";
import { useState } from "react";
import { useInputState } from "@mantine/hooks";
import axios from "axios";
import { getAlert } from "../utility/setting";
import { useRouter } from "next/router";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState(false);
  const [email, setEmail] = useInputState("");
  const [name, setName] = useInputState("");
  const [pass, setPass] = useInputState("");
  const [agree, setAgree] = useInputState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!agree || !email || !pass) {
      setErr(true);
      return;
    }
    setVisible(true);
    const domain = process.env.NEXT_PUBLIC_MY_DOMAIN;
    await axios
      .post(`${domain}/api/user_signup`, {
        name,
        email,
        password: pass,
      })
      .then(function (res) {
        if (res.data.success) {
          router.push("/dashbord");
        } else {
          getAlert(["Error!", res.data.err]);
        }
        setVisible(false);

        setAgree(false);
        setName("");
        setEmail("");
        setPass("");
        setErr(false);
      });
  };
  const handleClose = () => {
    setName("");
    setAgree(false);
    setEmail("");
    setPass("");
    setErr(false);
  };

  return (
    <>
      <Head>
        <title>Games Hut ~ Registration</title>
        <meta
          name="Registration Page ~ Games Hut"
          content="A good app to track out new information about video games for pc and also mobile.That is login page."
        />
      </Head>
      <Navbar />
      <Paper sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            maxWidth: "90%",
            padding: "10px",
          }}
          mx="auto"
          my="10vh"
        >
          <Grid gutter={"xl"}>
            <Grid.Col lg={6} md={12} sm={12}>
              <Box>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src="/img/login.svg"
                    width={620}
                    height={420}
                    layout="fill"
                    objectFit="contain"
                    alt="login-image"
                  />
                </AspectRatio>
              </Box>
            </Grid.Col>
            <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
              <LoadingOverlay
                loaderProps={{ size: "lg", color: "white" }}
                visible={visible}
                overlayOpacity={0.6}
                overlayColor={"teal"}
              />
            </MediaQuery>
            <Grid.Col lg={6} md={12} sm={12}>
              <Box style={{ position: "relative" }}>
                <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                  <LoadingOverlay
                    loaderProps={{ size: "lg", color: "white" }}
                    visible={visible}
                    overlayOpacity={0.6}
                    overlayColor={"teal"}
                  />
                </MediaQuery>
                <Title
                  order={2}
                  sx={(theme) => ({
                    textTransform: "uppercase",

                    "@media (max-width: 755px)": {
                      fontSize: theme.fontSizes.md,
                    },
                  })}
                >
                  Sign Up
                </Title>
                <Space h={"xl"} />

                <Input
                  icon={<User />}
                  variant="filled"
                  placeholder="Full Name"
                  sx={(theme) => ({
                    width: "70%",
                    marginBottom: "10px",

                    "@media (max-width: 755px)": {
                      width: "100%",
                    },
                  })}
                  value={name}
                  onChange={setName}
                />

                <Input
                  icon={<At />}
                  variant="filled"
                  placeholder="Email Address"
                  sx={(theme) => ({
                    width: "70%",
                    marginBottom: "10px",

                    "@media (max-width: 755px)": {
                      width: "100%",
                    },
                  })}
                  value={email}
                  onChange={setEmail}
                />

                <Input
                  icon={<Key />}
                  variant="filled"
                  placeholder="Password"
                  value={pass}
                  onChange={setPass}
                  sx={(theme) => ({
                    width: "70%",

                    "@media (max-width: 755px)": {
                      width: "100%",
                    },
                  })}
                />
                <Space h={"md"} />
                <Checkbox
                  label="I read and accept all the trams and conditions"
                  color="teal"
                  radius="xs"
                  size="xs"
                  value={agree}
                  onChange={setAgree}
                />
                <Space h={"xl"} />
                <Button
                  variant="filled"
                  fullWidth
                  sx={(theme) => ({
                    background: theme.colors.teal[4],
                    width: "70%",

                    "&:hover": {
                      background: theme.colors.teal[3],
                    },
                    "@media (max-width: 755px)": {
                      width: "100%",
                    },
                  })}
                  onClick={handleSubmit}
                >
                  Register
                </Button>
                <Space h={"xl"} />
                {err ? (
                  <Alert
                    icon={<AlertCircle size={16} />}
                    title="Error !"
                    color="red"
                    onClose={handleClose}
                    withCloseButton
                    sx={(theme) => ({
                      width: "70%",

                      "@media (max-width: 755px)": {
                        width: "100%",
                      },
                    })}
                  >
                    Field Must not be Empty !
                  </Alert>
                ) : (
                  ""
                )}
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
        <Footer />
      </Paper>
    </>
  );
};

export default Login;
