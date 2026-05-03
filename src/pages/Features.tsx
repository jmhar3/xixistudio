import { Divider, Flex, Image, Stack, Text, Title } from "@mantine/core";

import PageLayout from "../components/PageLayout";
import Location from "../components/Location";

import space1 from "/assets/images/the_space/studio-home.jpg";

const features = [
  {
    label: "Space & Light",
    description:
      "Featuring 120sqm, beautifully lit by north-facing windows while still maintaining complete privacy.",
    image: space1,
  },
  {
    label: "Facilities",
    description:
      "A private greenroom with a vanity, shower + couch for you to get ready comfortably.",
    image: space1,
  },
  {
    label: "Furnishing",
    description:
      "Tables, arm chairs, sofas + bed. White + black walls for bouncing light.",
    image: space1,
  },
  {
    label: "Equipment",
    description: "Extensive lighting kit available for hire",
    image: space1,
  },
];

function Features() {
  return (
    <PageLayout>
      <Title ta="center" size="3em" ff="Alex Brush" fw="normal">
        Features
      </Title>

      <Divider w="100%" />

      <Flex gap="md">
        <Stack key={features[0].label}>
          <Image src={features[0].image} />
          <Title ff="Alex Brush" fw="normal">
            {features[0].label}
          </Title>
          <Text>{features[0].description}</Text>
        </Stack>

        <Divider orientation="vertical" />

        <Stack key={features[1].label}>
          <Image src={features[1].image} />
          <Title ff="Alex Brush" fw="normal">
            {features[1].label}
          </Title>
          <Text>{features[1].description}</Text>
        </Stack>
      </Flex>

      <Divider w="100%" />

      <Flex gap="md">
        <Stack key={features[2].label}>
          <Image src={features[2].image} />
          <Title ff="Alex Brush" fw="normal">
            {features[2].label}
          </Title>
          <Text>{features[2].description}</Text>
        </Stack>

        <Divider orientation="vertical" />

        <Stack key={features[3].label}>
          <Image src={features[3].image} />
          <Title ff="Alex Brush" fw="normal">
            {features[3].label}
          </Title>
          <Text>{features[3].description}</Text>
        </Stack>
      </Flex>

      <Divider w="100%" />

      <Location />
    </PageLayout>
  );
}

export default Features;
