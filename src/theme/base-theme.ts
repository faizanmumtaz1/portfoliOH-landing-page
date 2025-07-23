import { createTheme } from "@mui/material";
import "../fonts/fonts.css";

export const baseTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 55,
          textTransform: "none",
          height: theme.spacing(7),
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
          background: "#D9D9D9",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontStyle: "normal",
          fontWeight: "300",
          fontSize: "16px",
          lineHeight: "150%",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "140%",
          "&.MuiInputLabel-sizeSmall": {
            fontSize: "1rem",
          },
        },
      },
    },
    MuiLinearProgress: {
      defaultProps: {
        variant: "determinate",
      },
      styleOverrides: {
        root: {
          borderRadius: "50px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          position: "relative",
          background: "#D9D9D9",
          "& .Mui-selected": {
            background: "#D9D9D9",
            "&:hover": {
              background: "#D9D9D9",
            },
            "&::before": {
              background: "#666666",
              content: '""', // used in conjunction with pseudo-elements
              position: "absolute",
              top: 0,
              left: 0,
              width: "6px",
              height: "100%",
              borderRadius: "0px 20px 20px 0px",
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          maxWidth: "85px",
          minWidth: "85px",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          left: 0,
          width: "6px",
          borderRadius: "0px 20px 20px 0px",
          background: "#666666",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        InputProps: {
          disableUnderline: true,
        },
      },
      styleOverrides: {
        root: ({ theme }) => ({
          "&:not(:has(.MuiInputBase-inputSizeSmall))": {
            background: "#F5F5F5",
            borderRadius: theme.spacing(1.5),
            border: "none",
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
            paddingLeft: theme.spacing(4.5),
            paddingRight: theme.spacing(4.5),
            width: "100%",
            '& label + [class*="MuiInputBase-root"][class*="MuiInput-root"]': {
              marginTop: 0,
            },
            label: {
              paddingLeft: theme.spacing(4.5),
              marginTop: theme.spacing(-0.5),
              "&.MuiInputLabel-shrink": {
                marginTop: 0,
              },
            },
          },
        }),
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          height: "40px",
          width: "143px",
          padding: "8px 22px",
          textTransform: "none",
          fontWeight: "900",
          fontSize: "16px",
          lineHeight: "18px",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          "& .MuiToggleButton-root:first-of-type": {
            borderTopLeftRadius: "55px",
            borderBottomLeftRadius: "55px",
          },
          "& .MuiToggleButton-root:last-of-type": {
            borderTopRightRadius: "55px",
            borderBottomRightRadius: "55px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        underlineNone: {
          fontFamily: "circular",
          fontSize: "1rem",
          fontWeight: "900",
          fontStyle: "Medium",
          lineHeight: "150%",
          letterSpacing: ".05px",
        },
      },
    },
  },
  typography: {
    h4: {
      fontStyle: "normal",
      fontWeight: "900",
      fontSize: "36px",
      lineHeight: "46px",
    },
    h6: {
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "20px",
      lineHeight: "150%",
    },
    fontFamily: ["Poppins", "Circular"].join(","),
  },
  palette: {
    mode: "light",
    text: {
      primary: "#272827",
    },
    primary: {
      main: "#E3665E",
    },
    secondary: {
      main: "#093550",
    },
    info: {
      main: "#3f3434",
    },
    success: {
      main: "#009262",
    },
    warning: {
      main: "#FFB240",
    },
    error: {
      main: "#E02B1D",
    },
  },
});
