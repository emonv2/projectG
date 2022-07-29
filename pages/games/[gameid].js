import React, { useState, useEffect } from "react";
import {
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Grid,
  Group,
  MediaQuery,
  Stack,
  Text,
  Title,
  Divider,
  InputWrapper,
  Textarea,
  Modal,
  ActionIcon,
} from "@mantine/core";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Pencil, Star } from "tabler-icons-react";
import { useInputState } from "@mantine/hooks";
import Footer from "../../components/Footer";
import { getCookie } from "cookies-next";
import Head from "next/head";

export default function MyGames({ games }) {
  const eb = games.data.review;

  const [review, setReview] = useInputState("");
  const [rating, setRating] = useState(0);
  const [openedModel, setOpenedModel] = useState(false);

  const [token, setToken] = useState("");
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setToken(getCookie("token"));
    if (token) {
      setLogged(true);
    }
  }, [token]);

  return (
    <>
      <Head>
        <title>{games.data.title} ~ Games Hut</title>
        <meta name={games.data.title} content={games.data.description} />
      </Head>
      <Navbar />
      <Box
        sx={{
          maxWidth: "90%",
          padding: "4vh 10px",
        }}
        mx="auto"
      >
        <Grid gutter={"xl"} grow>
          <Grid.Col lg={7} md={12}>
            <Box p={"xl"}>
              <Box>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={games.data.thumbnail}
                    alt={games.data.thumbnail}
                    height={"100%"}
                    width={"100%"}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </AspectRatio>
              </Box>
              <Stack>
                <MediaQuery largerThan={"xs"} styles={{ display: "none" }}>
                  <Title order={3}>{games.data.title}</Title>
                </MediaQuery>
                <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
                  <Title order={1}>{games.data.title}</Title>
                </MediaQuery>
                <Group>
                  {/* {tags.map((tag) => (
                    <Badge color="teal" size="sm" variant="outline">
                      {tag}
                    </Badge>
                  ))} */}
                  <MediaQuery largerThan={"xs"} styles={{ display: "none" }}>
                    <Badge color="teal" size="xs" variant="outline">
                      free game
                    </Badge>
                  </MediaQuery>
                  <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
                    <Badge color="teal" size="sm" variant="outline">
                      free game
                    </Badge>
                  </MediaQuery>
                </Group>
                <Grid>
                  <Grid.Col lg={8} md={12}>
                    <Button
                      variant="subtle"
                      compact
                      style={{ paddingLeft: "0" }}
                      onClick={() => setOpenedModel(true)}
                    >
                      View Games Details
                    </Button>
                    <Modal
                      opened={openedModel}
                      onClose={() => setOpenedModel(false)}
                      transition="fade"
                      transitionDuration={600}
                      transitionTimingFunction="ease"
                      size={"xl"}
                      title="About This Games"
                    >
                      <Text>{games.data.description}</Text>
                    </Modal>
                  </Grid.Col>
                  <Grid.Col lg={4} md={12}>
                    <Box style={{ display: "flex" }}>
                      <Text size="sm" mr={"md"}>
                        By
                      </Text>
                      <Text size="md" weight={700}>
                        {games.data.email}
                      </Text>
                    </Box>
                  </Grid.Col>
                </Grid>
              </Stack>
            </Box>
          </Grid.Col>

          <Grid.Col lg={5} md={12}>
            <Box p={"xl"}>
              <Grid style={{ alignItems: "center" }}>
                <Grid.Col span={8}>
                  <MediaQuery largerThan={"xs"} styles={{ display: "none" }}>
                    <Title order={3}>Total Reviews</Title>
                  </MediaQuery>
                  <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
                    <Title order={2}>Total Reviews</Title>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Avatar radius="md" size="lg" color={"red"}>
                    {games.data.review.length === 0
                      ? "0"
                      : games.data.review.length}
                  </Avatar>
                </Grid.Col>
              </Grid>
            </Box>
            {logged ? (
              <Box p={"xl"}>
                <InputWrapper
                  label="Enter Your Reviews"
                  description="Please enter your reviews."
                  style={{ paddingBottom: "10px" }}
                >
                  <Textarea value={review} onChange={setReview} />
                </InputWrapper>

                <InputWrapper
                  label="Rate This Game"
                  description="Please give a rating for this game."
                  style={{ paddingBottom: "2rem" }}
                >
                  <Group>
                    {[...Array(5)].map((star, i) => {
                      const ratings = i + 1;

                      return (
                        <>
                          <ActionIcon
                            variant="filled"
                            color={ratings <= rating ? "teal" : "gray"}
                            onClick={() => setRating(ratings)}
                          >
                            <Star size={14} />
                          </ActionIcon>
                        </>
                      );
                    })}
                  </Group>
                </InputWrapper>

                <Center>
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Button
                      color="teal"
                      radius="lg"
                      leftIcon={<Pencil />}
                      fullWidth
                    >
                      Add Reviews
                    </Button>
                  </MediaQuery>
                  <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Button color="teal" radius="lg" leftIcon={<Pencil />}>
                      Add Reviews
                    </Button>
                  </MediaQuery>
                </Center>
              </Box>
            ) : (
              <Box p={"xl"}>
                <Text>
                  Please
                  <Text
                    color={"teal"}
                    component="span"
                    weight={700}
                    underline
                    ml={"5px"}
                  >
                    login
                  </Text>{" "}
                  ,{" "}
                  <Text
                    color={"teal"}
                    component="span"
                    weight={700}
                    underline
                    mr={"5px"}
                  >
                    sign up
                  </Text>
                  for add reviews for this game. If you lgoin then you are able
                  to add your own reviews for this game
                </Text>
              </Box>
            )}
          </Grid.Col>
        </Grid>
        <Box p={"xl"}>
          {games.data.review?.map((game) => {
            return (
              <>
                <Grid style={{ alignItems: "center" }} key={game._id}>
                  <Grid.Col lg={3} md={12}>
                    <Grid>
                      <Grid.Col span={3}>
                        <Avatar radius="md" size="lg" color={"red"}>
                          {game.rate}
                        </Avatar>
                      </Grid.Col>
                      <Grid.Col span={9}>
                        <Text>Posted by</Text>
                        <Title order={4}>{game.email}</Title>
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col lg={9} md={12}>
                    <MediaQuery largerThan={"xs"} styles={{ display: "none" }}>
                      <Title order={4} style={{ fontStyle: "italic" }}>
                        {game.comment}
                      </Title>
                    </MediaQuery>
                    <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
                      <Title order={3} style={{ fontStyle: "italic" }}>
                        {game.comment}
                      </Title>
                    </MediaQuery>
                  </Grid.Col>
                </Grid>
                <Divider my="md" variant="dashed" />
              </>
            );
          })}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ req, res, params }) => {
  const options = {
    method: "GET",
  };

  const resData = await fetch(
    `https://gamerhubapi.herokuapp.com/games/single/${params.gameid}`,
    options
  );

  const data = await resData.json();

  return { props: { games: data } };
};
