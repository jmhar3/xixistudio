import { useMemo } from "react";
import { useLocation } from "react-router";
import { Text, Title, Divider } from "@mantine/core";

import PageLayout from "../components/PageLayout";
import Event from "../components/Event";

import type { EventType } from "../components/Event";

import workshopImage from "/assets/images/the_space/_DSC4975.jpg";
import lifeDrawingImage from "/assets/images/the_space/_DSC4974.jpg";
import openDayImage from "/assets/images/the_space/_DSC4958.jpg";
import photography101Image from "/assets/images/the_space/_DSC4974.jpg";
import shibariImage from "/assets/images/the_space/_DSC4958.jpg";
import tutoredImage from "/assets/images/the_space/_DSC4974.jpg";
import untutoredImage from "/assets/images/the_space/_DSC4958.jpg";

const events: EventType[] = [
  {
    image: workshopImage,
    label: "Workshops",
    description:
      "On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop.",
    link: { label: "View upcoming workshops", path: "/events/workshops" },
  },
  {
    image: lifeDrawingImage,
    label: "Life Drawing",
    description:
      "On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop.",
    link: { label: "View upcoming classes", path: "/events/life-drawing" },
  },
  {
    image: openDayImage,
    label: "Open Day",
    description:
      "On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop.",
  },
];

const workshops: EventType[] = [
  {
    image: photography101Image,
    label: "Photography 101",
    description:
      "On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop.",
    link: { label: "Sign up for Photography 101 workshop", path: "" },
  },
  {
    image: shibariImage,
    label: "Shibari",
    description:
      "On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop.",
    link: { label: "Sign up for Shibari workshop", path: "" },
  },
];

const lifeDrawing: EventType[] = [
  {
    image: untutoredImage,
    label: "Untutored",
    description:
      "On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop.",
    link: { label: "Sign up for untutored class", path: "/events/workshops" },
  },
  {
    image: tutoredImage,
    label: "Tutored",
    description:
      "On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop. On the first + last Thursday of the month there will be a photography workshop.",
    link: { label: "Sign up for tutored class", path: "/events/life-drawing" },
  },
];

function Events() {
  const { pathname } = useLocation();

  const pageData = useMemo(() => {
    if (pathname.includes("workshops")) {
      return {
        label: "Workshops",
        description:
          "On the first + last Thursday of the month there will be a photography workshop.",
        events: workshops,
      };
    }

    if (pathname.includes("life-drawing")) {
      return {
        label: "Life Drawing",
        description:
          "On the first + last Thursday of the month there will be a photography workshop.",
        events: lifeDrawing,
      };
    }

    return {
      label: "Events",
      description:
        "On the first + last Thursday of the month there will be a photography workshop.",
      events: events,
    };
  }, [pathname]);

  return (
    <PageLayout>
      <Title ta="center" size="3em" ff="Alex Brush" fw="normal">
        {pageData.label}
      </Title>

      <Text ta="center">{pageData.description}</Text>

      <Divider w="100%" />

      {pageData.events.map((event, index) => (
        <>
          {index !== 0 && <Divider w="100%" />}
          <Event
            key={event.label}
            {...event}
            orientation={index % 2 === 0 ? "left" : "right"}
          />
        </>
      ))}
    </PageLayout>
  );
}

export default Events;
