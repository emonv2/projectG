import {
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Grid,
  Group,
  MediaQuery,
  Paper,
  Space,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { Eye } from "tabler-icons-react";

import { setting } from "../utility/setting";

const GamesSection = ({ gameSec }) => {
  return (
    <>
      <Paper>
        <Box
          sx={{
            maxWidth: "90%",
            padding: "10px",
          }}
          mx="auto"
        >
          <Grid gutter={"xl"}>
            {gameSec.map((games) => {
              return (
                <Grid.Col lg={4} md={6} sm={12} key={games.id}>
                  <Card shadow="sm" p="lg" key={games.id}>
                    <Card.Section>
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
                    </Card.Section>
                    <Space h="md" />
                    <Title order={4}>{games.title}</Title>
                    <Space h="sm" />
                    <Group position="apart" style={{ marginBottom: 6 }}>
                      <Avatar color="teal">5.7</Avatar>
                      <Badge color="teal" size="sm" variant="outline">
                        35 reviews
                      </Badge>
                      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                        <Badge color="teal" size="sm" variant="outline">
                          Jahidul Islam
                        </Badge>
                      </MediaQuery>
                    </Group>

                    <Title
                      order={6}
                      style={{ fontWeight: "400", lineHeight: 1.5 }}
                    >
                      With Fjord Tours you can explore more of the magical fjord
                      landscapes with tours and activities on and around the
                      fjords of Norway
                    </Title>

                    <Button
                      variant="filled"
                      color="teal"
                      radius="lg"
                      style={{ marginTop: 14 }}
                      leftIcon={<Eye />}
                    >
                      View Details
                    </Button>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default GamesSection;
