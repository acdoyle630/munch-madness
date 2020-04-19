import { colors } from "../../../../themes/colors";

const mobileStyle = {
  tile: {
    height: "100px",
    width: "100px",
    border: "1px black solid",
    margin: "10px 5px 10px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTile: {
    backgroundColor: colors.teal,
    height: "100px",
    width: "100px",
    border: "1px black solid",
    margin: "10px 5px 10px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledTile: {
    backgroundColor: "red",
    height: "100px",
    width: "100px",
    border: "1px black solid",
    margin: "10px 5px 10px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginTop: "-22px",
    marginBottom: "15px",
  },
  text: {
    marginTop: "-35px",
  },
};

export default mobileStyle;
