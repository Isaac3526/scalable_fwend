import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Box from "@mui/material/Box";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import hero1 from "../assets/images/gettyimages-1132149387-612x612.jpg";
import hero2 from "../assets/images/gettyimages-479631237-612x612.jpg";

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      renderArrowPrev={() => null}
      renderArrowNext={() => null}
    >
      {[hero1, hero2].map((hero, index) => (
        <Box
          key={index}
          sx={{
            height: "60vh",
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: index == 0 ? "center" : "flex-end", 
            justifyContent: index === 0 ? "flex-start" : "flex-end", 
            textAlign: index === 0 ? "left" : "right",
            width: "100%",
            paddingLeft: index === 0 ? "20px" : "0",
            paddingRight: index === 0 ? "0" : "20px",
          }}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h2"}
            component="h1"
            sx={{
              backgroundColor: "rgba(254, 254, 255, 0.5)",
              padding: "10px 20px",
              border: "1px dashed rgba(255, 255, 255, 0.5)",
              borderRadius: "50px",
              color: "black",
            }}
          >
            {index === 0 ? "Watch and learn" : "Watch and chill"}
          </Typography>
        </Box>
      ))}
    </Carousel>
  );
};

export default Hero;
