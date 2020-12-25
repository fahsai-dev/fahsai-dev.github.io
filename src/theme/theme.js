import { createMuiTheme } from "@material-ui/core/styles";
import { COLOR } from "../constant";

// Create a theme instance.
export const theme = createMuiTheme({
  typography: {
    fontFamily: "Mostserrat",
    h1: {
      fontSize: 36,
      fontFamily: "Mostserrat",
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 24,
      fontFamily: "Mostserrat",
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 18,
      fontFamily: "Mostserrat",
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 16,
      fontFamily: "Mostserrat",
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 14,
      fontFamily: "Mostserrat",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 14,
      fontFamily: "Mostserrat",
      lineHeight: 1.5,
    },
    caption: {
      fontSize: 12,
      fontFamily: "Mostserrat",
      lineHeight: 1.5,
    },
    overline: {
      fontSize: 12,
      fontFamily: "Mostserrat",
      lineHeight: 1.5,
    },
    button: {
      fontSize: 16,
      fontFamily: "Mostserrat",
      lineHeight: 1.5,
    },
  },

  palette: {
    text: {
      primary: COLOR.black,
      secondary: COLOR.white,
    },
  },
});
