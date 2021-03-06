import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0", //'30px'
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#5F0587", //'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    //to apply only for small devices and smaller than that
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
