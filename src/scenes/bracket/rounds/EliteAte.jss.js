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
    flexDirection: "column",
    alignItems: "center",
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
    marginBottom: "15px",
  },
  text: {
    font: "roboto condensed",
    color: "white",
    fontWeight: "bold",
  },
};

export default style;
