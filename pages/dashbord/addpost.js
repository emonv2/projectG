import React, { useState, useRef, useEffect } from "react";
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
  Paper,
  Title,
  Divider,
  Input,
  InputWrapper,
  Button,
  MantineTheme,
  Notification,
  Modal,
} from "@mantine/core";
import { getAlert, setting } from "../../utility/setting";
import RichTextEditor from "../../components/RicText";
import { v4 as uuidv4 } from "uuid";
import { useInputState } from "@mantine/hooks";

import {
  Upload,
  Photo,
  X,
  Icon as TablerIcon,
  Tag,
  DeviceGamepad,
  Check,
} from "tabler-icons-react";
import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import Link from "next/link";
import Head from "next/head";

import { storage } from "../../utility/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Swal from "sweetalert2";
import Image from "next/image";
import { getCookie } from "cookies-next";
import axios from "axios";

const AddPost = () => {
  const [prog, setProg] = useState("");
  const [imgUrls, setImgUrls] = useState("");

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useInputState("");
  const [tag, setTag] = useInputState("");
  const [description, setDescription] = useInputState("");
  const [token, setToken] = useState("");
  const [userMail, setUserMail] = useState("");
  const [tost, setTost] = useState(false);

  useEffect(() => {
    setToken(getCookie("token"));
    setUserMail(getCookie("email"));
  }, []);

  const handleChange = (files) => {
    const file = files[0];

    uploadFirebase(file);
  };

  const uploadFirebase = (file) => {
    if (!file) return;
    const stor = storage;
    const storageRef = ref(stor, `image/${uuidv4()}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProg(Math.round(progress));
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrls(downloadURL);
        });
      }
    );
  };

  const handleSubmit = async () => {
    const options = {
      method: "POST",
      url: "https://gamerhubapi.herokuapp.com/games/addGames",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: title,
        thumbnail: imgUrls,
        description: description,
        tag: tag,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTost(true);
        setTitle("");
        setImgUrls("");
        setDescription("");
        setTag("");
      })
      .catch(function (error) {
        getAlert(["Error!", "Something went wrong"]);
      });
  };

  const status = "";

  function getIconColor(status, theme) {
    return status.accepted
      ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]
      : status.rejected
      ? theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
      : theme.colorScheme === "dark"
      ? theme.colors.dark[0]
      : theme.colors.gray[7];
  }

  function ImageUploadIcon({ status, ...props }) {
    if (status.accepted) {
      return <Upload {...props} />;
    }

    if (status.rejected) {
      return <X {...props} />;
    }

    return <Photo {...props} />;
  }
  const dropzoneChildren = (status, theme) => (
    <Group
      position="center"
      spacing="xl"
      style={{ minHeight: 220, pointerEvents: "none" }}
    >
      {imgUrls ? (
        <Image src={imgUrls} alt="Thumbnail" width={240} height={160} />
      ) : (
        <>
          <ImageUploadIcon
            status={status}
            style={{ color: getIconColor(status, theme) }}
            size={80}
          />
          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>{" "}
        </>
      )}
    </Group>
  );

  return (
    <>
      <Head>
        <title>Games Hut ~ Add Games</title>
        <meta
          name="Add Games ~ Games Hut"
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
          <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
            <Title order={2}>Add New Games</Title>
          </MediaQuery>
          <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
            <Title order={4}>Add New Games</Title>
          </MediaQuery>
          <Divider my="sm" variant="dashed" />
          <InputWrapper
            label="Games Name"
            description="Please enter your games name."
          >
            <Input
              icon={<DeviceGamepad />}
              placeholder="Pubg"
              sx={() => ({
                width: "70%",
                marginBottom: "10px",

                "@media (max-width: 755px)": {
                  width: "100%",
                },
              })}
              value={title}
              onChange={setTitle}
            />
          </InputWrapper>
          <InputWrapper
            label="Thumbnail"
            description="Select Thumbnail for your"
            sx={{ paddingTop: "10px" }}
          >
            <Dropzone
              onDrop={async (fil) => {
                handleChange(fil);
              }}
              onReject={(fil) => console.log("rejected files", fil)}
              maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
            >
              {(status) => dropzoneChildren(status, theme)}
            </Dropzone>
          </InputWrapper>
          <InputWrapper
            label="Description"
            description="Type your description about your games"
            sx={{ paddingTop: "10px" }}
          >
            <RichTextEditor
              value={description}
              onChange={setDescription}
              controls={[
                ["bold", "italic", "underline", "link"],
                ["unorderedList", "h1", "h2", "h3", "h4", "h5", "h6"],
                ["alignLeft", "alignCenter", "alignRight"],
              ]}
            />
          </InputWrapper>

          <InputWrapper
            label="Add Tags"
            description="Add tags for your games using comma"
            sx={{ paddingTop: "10px" }}
          >
            <Input
              icon={<Tag />}
              placeholder="example 1,example 2"
              sx={() => ({
                width: "70%",
                marginBottom: "10px",

                "@media (max-width: 755px)": {
                  width: "100%",
                },
              })}
              value={tag}
              onChange={setTag}
            />
          </InputWrapper>

          <Button
            variant="filled"
            sx={{ marginTop: "10px" }}
            onClick={handleSubmit}
          >
            Create Post
          </Button>
          <Modal
            opened={tost}
            onClose={() => setTost(false)}
            title="Successful"
          >
            Your post successfully added.
          </Modal>
          {/* {tost ? (
            <>
              <Notification
                icon={<Check size={18} />}
                color="teal"
                title="Teal notification"
              >
                This is teal notification with icon
              </Notification>
            </>
          ) : (
            ""
          )} */}
        </Box>
      </AppShell>
    </>
  );
};

export default AddPost;
