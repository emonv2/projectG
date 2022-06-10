import {
  ActionIcon,
  Box,
  Center,
  Group,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import React from "react";
import {
  BrandAppleArcade,
  BrandDribbble,
  BrandFacebook,
  BrandTwitter,
  BrandYoutube,
} from "tabler-icons-react";

const Footer = () => {
  return (
    <>
      <Paper radius={0} style={{ background: "#12B886" }}>
        <Box
          sx={{
            maxWidth: "90%",
            padding: "10vh 10px",
          }}
          mx="auto"
        >
          <Center>
            <Stack justify={"center"} align="center">
              <BrandAppleArcade size={64} color="Black" />
              <Title order={6} style={{ color: "white" }}>
                design and made by : Jahidul Islam Emon
              </Title>
              <Group>
                <ActionIcon
                  radius="xl"
                  style={{ padding: "5px" }}
                  variant="filled"
                  color={"dark"}
                >
                  <BrandFacebook />
                </ActionIcon>
                <ActionIcon
                  radius="xl"
                  style={{ padding: "5px" }}
                  variant="filled"
                  color={"dark"}
                >
                  <BrandYoutube />
                </ActionIcon>
                <ActionIcon
                  radius="xl"
                  style={{ padding: "5px" }}
                  variant="filled"
                  color={"dark"}
                >
                  <BrandTwitter />
                </ActionIcon>
                <ActionIcon
                  radius="xl"
                  style={{ padding: "5px" }}
                  variant="filled"
                  color={"dark"}
                >
                  <BrandDribbble />
                </ActionIcon>
              </Group>
            </Stack>
          </Center>
        </Box>
      </Paper>
    </>
  );
};

export default Footer;
