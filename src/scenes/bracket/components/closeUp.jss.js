import { colors } from "../../../themes/colors";

const basePlayer = {
  marginTop: "10vh",
  width: "80vw",
  height: "100px",
  borderRadius: "10px",
  boxShadow: `9px 9px 16px 7px ${colors.lightGray}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const style = {
  container: {},
  player: {
    ...basePlayer,
  },
  playerSelected: {
    ...basePlayer,
    backgroundColor: colors.teal,
  },
  vs: {
    fontWeight: "bold",
    fontSize: "35px",
    color: colors.lightGray,
    marginTop: "10vh",
    textAlign: "center",
  },
};

export default style;
