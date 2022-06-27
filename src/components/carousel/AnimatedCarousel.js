import { useState, useEffect } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import styled from "styled-components";
const Image = styled.img``;

const handleRotate = (index) => {
  console.log(index);
  switch (index) {
    case 4:
      return "rotateY(50deg)";
    case 3:
      return "rotateY(25deg)";
    case 2:
      return "rotateY(0deg)";
    case 1:
      return "rotateY(-25deg)";
    case 0:
      return "rotateY(-50deg)";
    default:
      break;
  }
};

const handleBGColor = (index) => {
  switch (index) {
    case 4:
      return "rgb(179 179 179)";
    case 3:
      return "rgb(230,230,230)";
    case 2:
      return "white";
    case 1:
      return "rgb(230,230,230)";
    case 0:
      return "rgb(179 179 179)";
    default:
      break;
  }
};
const ImageCard = styled.div`
  margin: 10px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => handleBGColor(props.index)};
  transform-style: preserve-3d;
  transform: ${(props) => handleRotate(props.index)};
  z-index: ${(props) => (props.index === 2 ? 100 : 10)};
`;
const ImageCardContainer = styled.div`
  perspective: 800px;
  width: 150%;
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 }
];
const AnimatedCarousel = ({ showCount, images }) => {
  const size = useWindowSize();
  const [imageWidth, setImageWidth] = useState(0);
  const [currentFirstIndex, setCurrentFirstIndex] = useState(0);

  useEffect(() => {
    setImageWidth(size.width / (showCount + 2));
  }, [showCount, size]);

  const onItemChanged = (item, index) => {
    setCurrentFirstIndex(item.index);
    console.log(item.index);
  };

  return (
    <>
      <div>
        <Carousel
          itemsToShow={showCount}
          pagination={false}
          onChange={onItemChanged}
          itemPadding={[0, 0, 0, 0]}
          outerSpacing={0}
        >
          {images.map((item, index) => {
            return (
              <ImageCardContainer key={index}>
                <ImageCard index={showCount - (index - currentFirstIndex) - 1}>
                  <Image src={item.src} width={"100%"} height={"100%"}></Image>
                </ImageCard>
              </ImageCardContainer>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default AnimatedCarousel;
