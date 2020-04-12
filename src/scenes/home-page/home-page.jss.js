import background from "../../assets/background.svg";
import backgroundTile from "../../assets/background_tile.svg";
import backgroundTile2 from "../../assets/bg_food.svg";
import { colors } from "../../themes/colors";
const style = {
  background: {
    backgroundImage: `url(${backgroundTile2})`,
    backgroundColor: colors.teal,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    margin: "25vh 0 50px 0",
  },
  input: {
    height: "27px",
    width: "60vw",
    borderRadius: "5px",
    padding: "2px",
  },
  callToAction: {
    backgroundColor: colors.darkOrange,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "75vw",
    borderRadius: "25px",
    position: "absolute",
    bottom: "5vh",
  },
  text: {
    font: "roboto condensed",
    color: "white",
    fontWeight: "bold",
  },
};

export default style;
