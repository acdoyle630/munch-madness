import { colors } from "../../../themes/colors";

const style = (left) => ({
  playerContainer: {
    height: "160px",
    borderBottom: `solid 2px ${colors.lightestGray}`,
    borderTop: `solid 2px ${colors.lightestGray}`,
    borderRight: left && `solid 2px ${colors.lightestGray}`,
    borderLeft: !left && `solid 2px ${colors.lightestGray}`,
    marginRight: left && "20px",
    marginLeft: !left && "20px",
    paddingRight: left && "14px",
    paddingLeft: !left && "14px",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  player: {
    backgroundColor: colors.lightestGray,
    width: "33vw",
    height: "60px",
    //margin: "20px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;
