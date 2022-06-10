import {
  ActionIcon,
  Badge,
  Blockquote,
  Box,
  Center,
  Grid,
  Group,
  Paper,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Star } from "tabler-icons-react";

const RecentReviews = () => {
  return (
    <>
      <Paper radius={0} style={{ background: "#F8F9FA" }}>
        <Space h={"xl"} />
        <Box
          sx={{
            maxWidth: "90%",
            padding: "10vh 10px",
          }}
          mx="auto"
        >
          <Center>
            <Title
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              size={"xl"}
              weight={800}
            >
              Recent Reviews
            </Title>
          </Center>
          <Space h={"xl"} />
          <Space h={"xl"} />
          <Grid gutter="xl">
            <Grid.Col lg={6} md={12} sm={12}>
              <Box>
                <Stack>
                  <Title order={4}>
                    <Blockquote>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita, eaque
                    </Blockquote>
                  </Title>
                  <Group>
                    <Badge color={"red"} variant="outline">
                      Pubg - Unknown Battle
                    </Badge>
                    <Badge color={"teal"} variant="outline">
                      Jahidul Islam
                    </Badge>
                    <Badge color={"teal"} variant="outline">
                      25 min Ago
                    </Badge>
                  </Group>
                  <Group>
                    <ActionIcon variant="filled" color={"teal"}>
                      <Star size={14} />
                    </ActionIcon>
                    <ActionIcon variant="filled" color={"teal"}>
                      <Star size={14} />
                    </ActionIcon>
                    <ActionIcon variant="filled" color={"teal"}>
                      <Star size={14} />
                    </ActionIcon>
                    <ActionIcon variant="filled" color={"teal"}>
                      <Star size={14} />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Box>
            </Grid.Col>
            <Grid.Col lg={6} md={12} sm={12}>
              <Box>
                <Stack>
                  <Title order={4}>
                    <Blockquote>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita, eaque
                    </Blockquote>
                  </Title>
                  <Group>
                    <Badge color={"red"} variant="outline">
                      Pubg - Unknown Battle
                    </Badge>
                    <Badge color={"teal"} variant="outline">
                      Jahidul Islam
                    </Badge>
                    <Badge color={"teal"} variant="outline">
                      25 min Ago
                    </Badge>
                  </Group>
                  <Group>
                    <ActionIcon variant="filled" color={"teal"}>
                      <Star size={14} />
                    </ActionIcon>
                    <ActionIcon variant="filled" color={"teal"}>
                      <Star size={14} />
                    </ActionIcon>
                    <ActionIcon variant="filled" color={"teal"}>
                      <Star size={14} />
                    </ActionIcon>
                    <ActionIcon variant="filled" color={"teal"}>
                      <Star size={14} />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Box>
            </Grid.Col>
          </Grid>
          <Space h={"xl"} />
        </Box>
      </Paper>
    </>
  );
};

export default RecentReviews;
