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
import Link from "next/link";
import { Eye } from "tabler-icons-react";

const GamesSection = ({ gameSec }) => {
  return (
    <>
      <Paper>
        <Box
          sx={{
            maxWidth: "90%",
            padding: "30px 10px",
          }}
          mx="auto"
        >
          <Grid gutter={"xl"}>
            {gameSec.data?.map((games) => {
              const totalRate = games.review
                ?.map((item) => item.rate)
                .reduce((partialSum, a) => partialSum + a, 0);
              const avarageRate = totalRate / games.review?.length;
              const actualRate = avarageRate.toFixed(1);
              return (
                <Grid.Col lg={4} md={6} sm={12} key={games.id}>
                  <Card shadow="sm" p="lg" key={games.id}>
                    <Card.Section>
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={games.thumbnail}
                          alt={games.thumbnail}
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
                      <Avatar color="teal">
                        {actualRate === "NaN" ? "0.0" : actualRate}
                      </Avatar>
                      <Badge color="teal" size="sm" variant="outline">
                        {games.review.length} reviews
                      </Badge>
                      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                        <Badge color="teal" size="sm" variant="outline">
                          {games.email.split("@")[0]}
                        </Badge>
                      </MediaQuery>
                    </Group>

                    <Title
                      order={6}
                      style={{ fontWeight: "400", lineHeight: 1.5 }}
                    >
                      {games.description.slice(0, 200) + "...."}
                    </Title>
                    <Link href={`/games/${games._id}`} passHref>
                      <Button
                        variant="filled"
                        color="teal"
                        radius="lg"
                        style={{ marginTop: 14 }}
                        leftIcon={<Eye />}
                      >
                        View Details
                      </Button>
                    </Link>
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
