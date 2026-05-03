import { useNavigate } from "react-router";

import {
  Flex,
  Text,
  Group,
  Stack,
  Title,
  Image,
  BackgroundImage,
  Button,
  Divider,
  Grid,
} from "@mantine/core";

import PageLayout from "../components/PageLayout";

import backdrop from "/assets/images/the_space/studio-home.jpg";
import example from "/assets/images/the_art/_DSC9488.jpg";
import welcome from "/assets/images/the_space/_DSC4975.jpg";

interface Link {
  label: string;
  path: string;
}

interface Snippet {
  image: string;
  label: string;
  description: string;
  links?: Link[];
}

const snippets: Snippet[] = [
  {
    image: example,
    label: "Our Facilities",
    description:
      "Featuring 120sqm, beautifully lit by north-facing windows while still maintaining complete privacy. Also includes access to greenroom complete with shower, bathroom + vanity.",
    links: [
      { label: "Features", path: "/features" },
      { label: "Hire Details", path: "/hire-details" },
    ],
  },
  {
    image: example,
    label: "Our Work",
    description: "See what's possible in this incredible space!",
    links: [
      { label: "The Space", path: "/gallery/space" },
      { label: "The Art", path: "gallery/art" },
    ],
  },
  {
    image: example,
    label: "Our Events",
    description:
      "The studio is the perfect place for events, with workshops and life drawing held monthly. You can also come view the space on the first Sunday of each month.",
    links: [
      { label: "Workshops", path: "/events/workshops" },
      { label: "Life Drawing", path: "/events/life-drawing" },
    ],
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <Stack>
      <BackgroundImage src={backdrop}>
        <Stack
          h="100vh"
          c="#1c1f21"
          align="center"
          justify="flex-start"
          style={{ overflow: "scroll" }}
        >
          <Stack align="flex-end" p="md" pos="sticky" top="0">
            <Text>Fitzroy, Melbourne</Text>

            <Flex w="100%" justify="center" h="15em">
              <Title ff="Gilda Display" size="15em" fw="normal">
                XIXI
              </Title>
              <Title ff="Alex Brush" size="15em" fw="normal">
                Studio
              </Title>
            </Flex>

            <Group grow w="100%">
              <Text ta="center">Community Space</Text>
              <Text ta="center">Photography Studio</Text>
              <Text ta="center">Workshops</Text>
            </Group>
          </Stack>

          <Image src={example} w="26em" pt="33em" />
        </Stack>
      </BackgroundImage>

      <PageLayout>
        <Grid mt="md" overflow="scroll" h="90vh">
          <Grid.Col span={8} pos="sticky" top="0">
            <Stack gap="md">
              <Image src={welcome} w="100%" />
              <Text size="xl">
                XI XI Studio is a welcoming space for creatives to connect and
                see their visions come to life.
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={4} style={{ overflow: "scroll" }} h="90vh" pb="xl">
            <Stack gap="md">
              {snippets.map((snippet, index) => (
                <>
                  {index !== 0 && <Divider />}
                  <Stack key={snippet.label} gap="sm">
                    <Image src={snippet.image} w="100%" />
                    <Stack gap="0">
                      <Title ff="Alex Brush" fw="normal">
                        {snippet.label}
                      </Title>
                      <Text>{snippet.description}</Text>
                    </Stack>

                    {snippet.links && (
                      <Group grow>
                        {snippet.links.map((link) => (
                          <Button
                            size="md"
                            c="#f4f4f4"
                            color="#f4f4f4"
                            variant="light"
                            key={link.path}
                            onClick={() => navigate(link.path)}
                          >
                            {link.label}
                          </Button>
                        ))}
                      </Group>
                    )}
                  </Stack>
                </>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </PageLayout>
    </Stack>
  );
}

export default Home;
