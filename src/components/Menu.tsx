import { Flex, Stack, Title, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router";

import MenuButton from "./MenuButton";
import { useHover } from "@mantine/hooks";
import { useLocation } from "react-router";

const pages = [
  { label: "Features", path: "/features" },
  {
    label: "Gallery",
    paths: [
      { label: "The Space", path: "/gallery/space" },
      { label: "The Art", path: "/gallery/art" },
    ],
  },
  { label: "Hire Details", path: "/hire-details" },
  {
    label: "Events",
    path: "/events",
    paths: [
      { label: "Workshops", path: "/events/workshops" },
      { label: "Life Drawing", path: "/events/life-drawing" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

function Menu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { hovered, ref } = useHover();

  return (
    <Flex
      p="md"
      w="100%"
      bg="#1c1f21"
      justify="space-between"
      pos={pathname === "/" ? undefined : "fixed"}
      top={pathname === "/" ? undefined : "0"}
    >
      <UnstyledButton
        onClick={() => navigate("/")}
        ref={ref}
        c={hovered ? "cornflowerblue" : undefined}
      >
        <Stack w="100%" justify="center" gap="0" h="1em" pt=".6em">
          <Title ff="Gilda Display" size="3em" fw="normal" h=".52em">
            XIXI
          </Title>
          <Title ff="Alex Brush" size="3em" fw="normal" pl=".8em">
            Studio
          </Title>
        </Stack>
      </UnstyledButton>

      <Flex
        pb="xs"
        gap="md"
        h="fit-content"
        style={{ borderBottom: "solid 1px #f4f4f4" }}
      >
        {pages.map((page) => (
          <MenuButton {...page} key={page.label} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Menu;
