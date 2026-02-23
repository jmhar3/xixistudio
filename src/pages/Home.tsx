import { Button, Stack, Text } from "@mantine/core";

function Home() {
  return (
    <Stack>
      <Text>
        Features | space specifications(sqm, north-facing windows, privacy),
        facilites (ie. bathroom/shower/etc.)
      </Text>
      <Text>Location</Text>
      <Button.Group>
        <Button>See the space</Button>
        <Button>See whats possible</Button>
      </Button.Group>
      <Text>Hire Details (rates, booking process, etc.)</Text>
    </Stack>
  );
}

export default Home;
