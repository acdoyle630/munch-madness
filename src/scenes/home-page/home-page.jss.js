import background from "../../assets/background.svg";

const style = {
  background: {
    backgroundImage: `url(${background})`,
    backgroundColor: "#25D6CB",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    margin: "25vh 0 50px 0",
  },
  input: {
    height: "27px",
    width: "60vw",
    borderRadius: "5px",
    padding: "2px",
  },
  callToAction: {
    backgroundColor: "#EE4E37",
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
