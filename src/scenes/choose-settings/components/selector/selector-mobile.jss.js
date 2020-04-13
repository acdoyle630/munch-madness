import { colors } from "../../../../themes/colors";
const box = {
  width: "90%",
  marginRight: "5px",
  height: "7vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  backgroundColor: colors.unselectedGrey,
};
const mobileStyle = {
  category: {
    marginLeft: "3vw",
    fontWeight: "bold",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1vh 3vw 0 3vw",
  },
  unselectedBox: {
    ...box,
  },
  selectedBox: {
    ...box,
    backgroundColor: colors.selectedBlue,
  },
};

export default mobileStyle;
