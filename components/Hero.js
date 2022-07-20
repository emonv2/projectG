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
} from "@mantine/core";

import Image from "next/image";
import React, { useState } from "react";
import { Eye } from "tabler-icons-react";
import { v4 as uuidv4 } from "uuid";

const Hero = ({ game }) => {
  const futureGame = game.data[0];

  const totalReview = futureGame.review;
  const tags = futureGame.tag.split(",");

  return (
    <>
      <Box style={{ padding: "10vh 0" }}>
        <Box
          sx={{
            maxWidth: "90%",
            padding: "10px",
          }}
          mx="auto"
        >
          <Grid gutter={"xl"} grow>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Grid.Col lg={6} md={12}>
                <Box>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={futureGame.thumbnail}
                      alt={futureGame.thumbnail}
                      height={"100%"}
                      width={"100%"}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </AspectRatio>
                </Box>
              </Grid.Col>
            </MediaQuery>
            <Grid.Col lg={6} md={12}>
              <Box>
                <Stack>
                  <MediaQuery largerThan={"xs"} styles={{ display: "none" }}>
                    <Title order={5}>{futureGame.title}</Title>
                  </MediaQuery>
                  <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
                    <Title order={1}>{futureGame.title}</Title>
                  </MediaQuery>
                  <Group>
                    {tags.map((tag) => (
                      <Badge
                        color="teal"
                        size="sm"
                        variant="outline"
                        key={uuidv4()}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                  <Title
                    order={6}
                    style={{ fontWeight: "400", textAlign: "justify" }}
                  >
                    {futureGame.description.slice(0, 400) + "....."}
                  </Title>
                  <Group>
                    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                      <Button
                        color="teal"
                        radius="lg"
                        leftIcon={<Eye />}
                        fullWidth
                      >
                        View Details
                      </Button>
                    </MediaQuery>
                    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                      <Button color="teal" radius="lg" leftIcon={<Eye />}>
                        View Details
                      </Button>
                    </MediaQuery>

                    <Group style={{ height: "100%", justifyContent: "center" }}>
                      <Avatar color="red" radius="xl">
                        3.6
                      </Avatar>
                      <Badge color="teal" size="sm" variant="outline">
                        {totalReview.length} REVIEWS
                      </Badge>
                      <Badge color="teal" size="sm" variant="outline">
                        {futureGame.email.split("@")[0]}
                      </Badge>
                    </Group>
                  </Group>
                </Stack>
              </Box>
            </Grid.Col>

            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Grid.Col lg={6} md={12}>
                <Box>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={futureGame.thumbnail}
                      height={"100%"}
                      width={"100%"}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </AspectRatio>
                </Box>
              </Grid.Col>
            </MediaQuery>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
