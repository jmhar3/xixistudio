import { Flex, Image, Stack, Text, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";

import location from "/assets/images/location.png";

function Location() {
  const { hovered, ref } = useHover();

  const onLocationClick = () =>
    window.open("https://maps.app.goo.gl/8Ha3NRdz7SQ3caiE6", "_blank");

  return (
    <Flex gap="md">
      <Image
        src={location}
        w="50%"
        onClick={onLocationClick}
        style={{ cursor: "pointer" }}
      />

      <Stack align="center">
        <Stack gap="0">
          <Title size="3em" ff="Alex Brush" fw="normal" ta="center">
            Location
          </Title>

          <Text
            ta="center"
            c={hovered ? "orange" : undefined}
            onClick={onLocationClick}
            style={{ cursor: "pointer" }}
            ref={ref}
          >
            Rear 425/427 Brunswick St, Fitzroy VIC 3065
          </Text>
        </Stack>

        <Text ta="center">
          Located just 7km from the Melbourne CBD in the heart of Fitzroy with
          easy access to nearby restaurants and cafe.
        </Text>
      </Stack>
    </Flex>
  );
}

export default Location;
