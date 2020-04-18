import { colors } from "../../../../themes/colors";

const mobileStyle = {
  tile: {
    height: "20vw",
    width: "20vw",
    border: "1px black solid",
    margin: "10px 5px 10px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTile: {
    backgroundColor: colors.teal,
    height: "20vw",
    width: "20vw",
    border: "1px black solid",
    margin: "10px 5px 10px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledTile: {
    backgroundColor: "red",
    height: "20vw",
    width: "20vw",
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
