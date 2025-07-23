import {pink} from "@mui/material/colors";
import {createTheme} from "@mui/material";

export const portfoliohTheme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                disableElevation: false
            },
            styleOverrides: {
                root: {
                    borderRadius: 55,
                    textTransform: "none"
                }
            }
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: "#666666"
        },
        secondary: {
            main: pink['A400']
        }
    }
});