import React, { useState } from "react";
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
  Select,
  Modal,
} from "@mantine/core";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Pencil, Star } from "tabler-icons-react";
import { useInputState } from "@mantine/hooks";
import Footer from "../../components/Footer";

const MyGames = () => {
  const [review, setReview] = useInputState("");
  const [openedModel, setOpenedModel] = useState(false);

  return (
    <>
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
              <Stack>
                <MediaQuery largerThan={"xs"} styles={{ display: "none" }}>
                  <Title order={3}>Pubg</Title>
                </MediaQuery>
                <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
                  <Title order={1}>Pubg Mother Fucker</Title>
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
                      <Text>
                        Modal is built with Transition component. You can change
                        transitions with props: transition predefined transition
                        name or transition object transitionDuration transition
                        duration in ms, defaults to 300ms. Note that, modal has
                        two elements which are animated: overlay and modal body.
                        Overlay changes opacity during transition and its
                        animation is twice as fast as modal body.
                        transitionTimingFunction timing function, defaults to
                        theme.transitionTimingFunction
                      </Text>
                    </Modal>
                  </Grid.Col>
                  <Grid.Col lg={4} md={12}>
                    <Box style={{ display: "flex" }}>
                      <Text size="sm" mr={"md"}>
                        By
                      </Text>
                      <Text size="md" weight={700}>
                        Jahidul Islam
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
                    2
                  </Avatar>
                </Grid.Col>
              </Grid>
            </Box>
            <Box p={"xl"}>
              <InputWrapper
                label="Enter Your Reviews"
                description="Please enter your reviews."
                style={{ paddingBottom: "10px" }}
              >
                <Textarea value={review} onChange={setReview} />
              </InputWrapper>

              <Select
                label="Your Rating"
                description="How many start you give "
                style={{ paddingBottom: "20px" }}
                clearable
                placeholder="Pick one"
                data={[
                  {
                    value: "5",
                    label: "5 Star",
                  },
                  {
                    value: "4",
                    label: "4 Star",
                  },
                  {
                    value: "3",
                    label: "3 Star",
                  },
                  {
                    value: "2",
                    label: "2 Star",
                  },
                  {
                    value: "1",
                    label: "1 Star",
                  },
                ]}
              />

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
          </Grid.Col>
        </Grid>
        <Box p={"xl"}>
          <Grid style={{ alignItems: "center" }}>
            <Grid.Col lg={3} md={12}>
              <Grid>
                <Grid.Col span={3}>
                  <Avatar radius="md" size="lg" color={"red"}>
                    2
                  </Avatar>
                </Grid.Col>
                <Grid.Col span={9}>
                  <Text>Posted by</Text>
                  <Title order={4}>Jahidul Islam</Title>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col lg={9} md={12}>
              <MediaQuery largerThan={"xs"} styles={{ display: "none" }}>
                <Title order={4} style={{ fontStyle: "italic" }}>
                  By yourself or with friends, your mission is to survive an
                  epic oceanic adventure across a perilous sea! Gather debris to
                  survive
                </Title>
              </MediaQuery>
              <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
                <Title order={3} style={{ fontStyle: "italic" }}>
                  By yourself or with friends, your mission is to survive an
                  epic oceanic adventure across a perilous sea! Gather debris to
                  survive
                </Title>
              </MediaQuery>
            </Grid.Col>
          </Grid>
          <Divider my="md" variant="dashed" />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MyGames;
