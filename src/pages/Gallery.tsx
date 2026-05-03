import { Image, SimpleGrid, Title } from "@mantine/core";
import { useLocation } from "react-router";

import PageLayout from "../components/PageLayout";

import spaceImage1 from "/assets/images/the_space/_DSC4958.jpg";
import spaceImage2 from "/assets/images/the_space/_DSC4962.jpg";
import spaceImage3 from "/assets/images/the_space/_DSC4966.jpg";
import spaceImage4 from "/assets/images/the_space/_DSC4969.jpg";
import spaceImage5 from "/assets/images/the_space/_DSC4971.jpg";
import spaceImage6 from "/assets/images/the_space/_DSC4974.jpg";
import spaceImage7 from "/assets/images/the_space/_DSC4975.jpg";

import artImage1 from "/assets/images/the_art/_DSC0169.jpg";
import artImage2 from "/assets/images/the_art/_DSC0305.jpg";
import artImage3 from "/assets/images/the_art/_DSC0816.jpg";
import artImage4 from "/assets/images/the_art/_DSC0901.jpg";
import artImage5 from "/assets/images/the_art/_DSC0909.jpg";
import artImage6 from "/assets/images/the_art/_DSC0949.jpg";
import artImage7 from "/assets/images/the_art/_DSC1363.jpg";
import artImage8 from "/assets/images/the_art/_DSC1383.jpg";
import artImage9 from "/assets/images/the_art/_DSC1931.jpg";
import artImage10 from "/assets/images/the_art/_DSC2048.jpg";
import artImage11 from "/assets/images/the_art/_DSC2342.jpg";
import artImage12 from "/assets/images/the_art/_DSC3361.jpg";
import artImage13 from "/assets/images/the_art/_DSC3432.jpg";
import artImage14 from "/assets/images/the_art/_DSC3687.jpg";
import artImage15 from "/assets/images/the_art/_DSC5192.jpg";
import artImage16 from "/assets/images/the_art/_DSC5793.jpg";
import artImage17 from "/assets/images/the_art/_DSC5919.jpg";
import artImage18 from "/assets/images/the_art/_DSC6068.jpg";
import artImage19 from "/assets/images/the_art/_DSC6254.jpg";
import artImage20 from "/assets/images/the_art/_DSC6415.jpg";
import artImage21 from "/assets/images/the_art/_DSC6425.jpg";
import artImage22 from "/assets/images/the_art/_DSC9488.jpg";
import artImage23 from "/assets/images/the_art/_DSC9658.jpg";

const theSpaceImages = [
  spaceImage1,
  spaceImage2,
  spaceImage3,
  spaceImage4,
  spaceImage5,
  spaceImage6,
  spaceImage7,
];

const theArtImages = [
  artImage1,
  artImage2,
  artImage3,
  artImage4,
  artImage5,
  artImage6,
  artImage8,
  artImage9,
  artImage10,
  artImage11,
  artImage12,
  artImage13,
  artImage14,
  artImage15,
  artImage16,
  artImage17,
  artImage18,
  artImage19,
  artImage20,
  artImage21,
  artImage22,
  artImage23,
  artImage7,
];

function Gallery() {
  const { pathname } = useLocation();

  return (
    <PageLayout>
      <Title ta="center" size="3em" ff="Alex Brush" fw="normal">
        {pathname.includes("space") ? "The Space" : "The Art"}
      </Title>

      <SimpleGrid cols={2}>
        {pathname.includes("space")
          ? theSpaceImages.map((image) => <Image src={image} key={image} />)
          : theArtImages.map((image) => <Image src={image} key={image} />)}
      </SimpleGrid>
    </PageLayout>
  );
}

export default Gallery;
