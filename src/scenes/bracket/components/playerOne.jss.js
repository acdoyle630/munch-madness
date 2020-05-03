import { colors } from "../../../themes/colors";

const style = (left) => ({
  playerContainer: {
    backgroundColor: colors.lightestGray,
    width: "33vw",
    height: "60px",
    margin: left ? "20px 0px 10px 0" : "20px 20px 10px 36px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;
