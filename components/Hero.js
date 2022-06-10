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
import { Eye } from "tabler-icons-react";

const Hero = () => {
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
                      src={
                        "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                      }
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
                    <Title order={5}>Player Unknown - Pubg</Title>
                  </MediaQuery>
                  <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
                    <Title order={1}>Player Unknown - Pubg</Title>
                  </MediaQuery>
                  <Group>
                    <Badge color="teal" size="sm" variant="outline">
                      pubg
                    </Badge>
                    <Badge color="teal" size="sm" variant="outline">
                      Player Unknown
                    </Badge>
                  </Group>
                  <Title
                    order={6}
                    style={{ fontWeight: "400", textAlign: "justify" }}
                  >
                    A New World Created By Hidetaka Miyazaki And George R. R.
                    Martin. ELDEN RING, developed by FromSoftware, Inc. and
                    BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG
                    adventure set within a world created by Hidetaka Miyazaki
                    creator of the influential....
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
                        35 reviews
                      </Badge>
                      <Badge color="teal" size="sm" variant="outline">
                        Jahidul Islam
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
                      src={
                        "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                      }
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
