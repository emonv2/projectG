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
  Notification,
  Paper,
  Space,
  Title,
  PasswordInput,
} from "@mantine/core";
import Image from "next/image";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { AlertCircle, At, Key, X } from "tabler-icons-react";
import { useState } from "react";
import { useInputState } from "@mantine/hooks";
import axios from "axios";
import { getAlert } from "../utility/setting";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState(false);
  const [email, setEmail] = useInputState("");
  const [pass, setPass] = useInputState("");
  const [agree, setAgree] = useInputState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!agree || !email || !pass) {
      setErr(true);
      return;
    }
    setVisible(true);

    const options = {
      method: "POST",
      url: "https://gamerhubapi.herokuapp.com/user/login",
      headers: { "Content-Type": "application/json" },
      data: { email, password: pass },
    };

    axios
      .request(options)
      .then(function (res) {
        if (res.data.status) {
          setCookie("token", res.data.token);
          setCookie("email", res.data.email);
          setCookie("userid", res.data.userid);

          router.push("/dashbord");
        } else {
          getAlert(["Error!", res.data.massage]);
        }

        setVisible(false);

        setAgree(false);
        setEmail("");
        setPass("");
      })
      .catch(function (error) {
        getAlert(["Error!", "Login failed !"]);
        setVisible(false);
      });
  };
  const handleClose = () => {
    setAgree(false);
    setEmail("");
    setPass("");
    setErr(false);
  };

  return (
    <>
      <Head>
        <title>Games Hut ~ Login</title>
        <meta
          name="Login Page ~ Games Hut"
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

            <Grid.Col lg={6} md={12} sm={12}>
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
                  Login
                </Title>
                <Space h={"xl"} />

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

                <PasswordInput
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
                  label="I agree to sell my privacy"
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
                  Login
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
