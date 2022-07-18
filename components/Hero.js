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
import React from "react";
import { Eye, Tags } from "tabler-icons-react";

const Hero = ({ game }) => {
  console.log(game);

  const totalReview = game.data[0].review;
  const tags = game.data[0].tag.split(",");

  //console.log(tags);

  //const mep = tags.filter((item) => item != " ");
  console.log(mep);

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
                      src={game.data[0].thumbnail}
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
                    <Title order={5}>{game.data[0].title}</Title>
                  </MediaQuery>
                  <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
                    <Title order={1}>{game.data[0].title}</Title>
                  </MediaQuery>
                  <Group>
                    {tags.map((tag) => {
                      <Badge color="teal" size="sm" variant="outline">
                        {tag}
                      </Badge>;
                    })}
                    <Badge color="teal" size="sm" variant="outline">
                      Player Unknown
                    </Badge>
                  </Group>
                  <Title
                    order={6}
                    style={{ fontWeight: "400", textAlign: "justify" }}
                  >
                    {game.data[0].description}
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
                        {game.data[0].email}
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
                      src={game.data[0].thumbnail}
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
