import { Button, Group, Image, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router";

export interface EventType {
  image: string;
  label: string;
  description: string;
  link?: { label: string; path: string };
}

interface EventProps extends EventType {
  orientation: "left" | "right";
}

function Event(props: EventProps) {
  const { image, label, description, link, orientation } = props;

  const navigate = useNavigate();

  return (
    <Group grow>
      {orientation === "left" && <Image src={image} />}

      <Stack h="100%" align="center" justify="space-between">
        <Stack>
          <Title ta="center" ff="Alex Brush" fw="normal">
            {label}
          </Title>

          <Text>{description}</Text>
        </Stack>

        {link && (
          <Button
            size="md"
            c="#f4f4f4"
            color="#f4f4f4"
            variant="light"
            w="fit-content"
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </Button>
        )}
      </Stack>

      {orientation === "right" && <Image src={image} />}
    </Group>
  );
}

export default Event;
