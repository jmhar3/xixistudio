import { useNavigate } from "react-router";
import {
  Flex,
  SimpleGrid,
  Image,
  Stack,
  Text,
  Title,
  Button,
  Divider,
} from "@mantine/core";

import PageLayout from "../components/PageLayout";

import image from "/assets/images/the_space/_DSC4975.jpg";

function HireDetails() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Title ff="Alex Brush" fw="normal">
        Hire Details
      </Title>

      <Divider w="100%" />

      <SimpleGrid cols={2}>
        <Stack gap="md" align="center">
          <Image src={image} />

          <Title ff="Alex Brush" fw="normal">
            Booking Process
          </Title>

          <Text>
            Inquire using the booking form and we’ll be in touch shortly to
            confirm a few details.
          </Text>
          <Text>
            To secure the booking we’ll require a contract to be signed and
            prior payment to be arranged.
          </Text>
          <Text>
            On the day someone will be there in person to let you in and show
            you around as needed.
          </Text>

          <Button
            size="md"
            c="#f4f4f4"
            color="#f4f4f4"
            variant="light"
            w="fit-content"
            onClick={() => navigate("/contact")}
          >
            Send an inquiry
          </Button>
        </Stack>

        <Stack
          align="center"
          pl="md"
          gap="md"
          style={{ borderLeft: "solid 1px #f4f4f4" }}
        >
          <Flex gap="xs" align="center">
            <Text size="xl" ta="center">
              The Space |
            </Text>
            <Flex gap="3px" align="center">
              <Text ff="Alex Brush" size="1.8em">
                $100
              </Text>
              <Text size="xl" ta="center">
                /hr
              </Text>
            </Flex>
          </Flex>
          <Text ta="center">
            2 cycloramas
            <br />1 corner + 1 flat Greenroom with vanity, shower + toilet
            Furniture
            <br />
            tables, arm chairs, sofas + bed
            <br />
            White + black walls for bouncing light
          </Text>

          <Button
            size="md"
            c="#f4f4f4"
            color="#f4f4f4"
            variant="light"
            w="fit-content"
            onClick={() => navigate("/gallery/space")}
          >
            View the space
          </Button>

          <Divider w="100%" />

          <Flex gap="3px" align="center">
            <Text size="xl" ta="center">
              The Gear | +
            </Text>
            <Text ff="Alex Brush" size="1.8em">
              $50
            </Text>
            <Text size="xl" ta="center">
              /hr
            </Text>
          </Flex>
          <Text ta="center">
            Lighting
            <br />
            Tripods
          </Text>
        </Stack>
      </SimpleGrid>
    </PageLayout>
  );
}

export default HireDetails;
