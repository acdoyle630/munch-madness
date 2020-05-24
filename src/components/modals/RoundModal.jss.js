import { colors } from "../../themes/colors";

const backgroundColors = {
  8: colors.orange,
  4: colors.teal,
  2: colors.darkOrange,
};

const style = (round) => {
  return {
    modalBody: {
      width: "100vw",
      height: "100vh",
      backgroundColor: backgroundColors[round],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    image: {
      marginTop: "8vh",
    },
    text: {
      fontWeight: "bold",
      marginTop: "-35px",
    },
  };
};

export default style;
