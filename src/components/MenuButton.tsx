import { Menu, Stack, UnstyledButton } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useNavigate, useLocation } from "react-router";

interface MenuButtonProps {
  label: string;
  path?: string;
  paths?: {
    label: string;
    path: string;
  }[];
}

function MenuButton({ label, path, paths }: MenuButtonProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { hovered, ref } = useHover();

  if (path && !paths)
    return (
      <UnstyledButton
        key={label}
        w="6em"
        ta="center"
        h="fit-content"
        ref={ref}
        c={hovered ? "cornflowerblue" : "#f4f4f4"}
        style={{
          borderBottom: "solid 1px #1c1f21",
          borderBottomColor:
            pathname.includes(path) || hovered
              ? hovered
                ? "cornflowerblue"
                : "orange"
              : "#1c1f21",
        }}
        onClick={() => navigate(path)}
      >
        {label}
      </UnstyledButton>
    );

  if (paths)
    return (
      <Menu
        trigger="hover"
        openDelay={80}
        closeDelay={250}
        styles={{
          dropdown: {
            borderRadius: "0",
            backgroundColor: "#1c1f21",
            borderColor: "cornflowerblue",
          },
        }}
      >
        <Menu.Target>
          <UnstyledButton
            key={label}
            ref={ref}
            w="6em"
            ta="center"
            h="fit-content"
            c={hovered && label !== "Gallery" ? "cornflowerblue" : "#f4f4f4"}
            style={{
              cursor: path ? "pointer" : "default",
              borderBottom: "solid 1px #1c1f21",
              borderBottomColor:
                (path && pathname.includes(path)) ||
                (label === "Gallery" && pathname.includes("gallery")) ||
                hovered
                  ? hovered
                    ? "cornflowerblue"
                    : "orange"
                  : "#1c1f21",
            }}
            onClick={() => path && navigate(path)}
          >
            {label}
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Stack p="sm">
            {paths.map((subpath) => (
              <DropdownButton key={subpath.path} {...subpath} />
            ))}
          </Stack>
        </Menu.Dropdown>
      </Menu>
    );
}

function DropdownButton({ label, path }: { label: string; path: string }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { hovered, ref } = useHover();

  return (
    <UnstyledButton
      ref={ref}
      onClick={() => navigate(path)}
      c={hovered ? "cornflowerblue" : "#f4f4f4"}
      style={{
        borderBottom: "solid 1px #1c1f21",
        borderColor:
          pathname.includes(path) || hovered
            ? hovered
              ? "cornflowerblue"
              : "orange"
            : "#1c1f21",
      }}
    >
      {label}
    </UnstyledButton>
  );
}

export default MenuButton;
