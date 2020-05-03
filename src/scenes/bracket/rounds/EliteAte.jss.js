import { colors } from "../../../themes/colors";

const style = {
  imageContainer: {
    textAlign: "center",
  },
  logo: {
    height: "170px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  matchupContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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
