import palette from "./palette";
import typography from "./typography";
import { createTheme, responsiveFontSizes } from "@material-ui/core";

const theme = responsiveFontSizes(
    createTheme({
      palette: palette,
      typography : typography, 
    })
  );

  export default theme; 