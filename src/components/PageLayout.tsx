import { Stack } from "@mantine/core";
import { useLocation } from "react-router";
import type { PropsWithChildren } from "react";

import Menu from "./Menu";

function PageLayout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();

  return (
    <Stack
      p="md"
      gap="md"
      align="center"
      justify="center"
      pt={pathname === "/" ? undefined : "5em"}
      w={document.documentElement.clientWidth}
    >
      <Menu />

      {children}
    </Stack>
  );
}

export default PageLayout;
