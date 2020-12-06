import { createMuiTheme  } from "@material-ui/core/styles";

const arcBlue = '#0b70b9'
const arcOrange = '#ffba60'

  export default createMuiTheme({
      palette: {
          common: {
              arcBlue: `${arcBlue}`,
              arcOrange: `${arcOrange}`
          },
          primary: {
              main: `${arcBlue}`
          },
          secondary: {
              main: `${arcOrange}`
          }
      },
      typography: {
          h3: {
              fontWeight: 300
          }
      }
  })