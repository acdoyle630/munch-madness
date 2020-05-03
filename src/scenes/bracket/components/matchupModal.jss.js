import { colors } from "../../../themes/colors";

const style = {
  modal: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    marginTop: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  subHeader: {
    color: colors.gray,
  },
};

export default style;
