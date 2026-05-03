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
  spaceImage1,
  spaceImage2,
  spaceImage3,
  spaceImage4,
  spaceImage5,
  spaceImage6,
  spaceImage7,
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
