"use client";
import { SxProps, Theme, ThemeOptions, createTheme } from "@mui/material";
import React from "react";
import typography from "@/theme/typography";
import "../fonts/fonts.css";
// import "../assets/font/font.css";
import muiGridStyles from "@/components/common/muiGridStyles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const grey = {
  50: "#f3f3f4",
  100: "#dddddd",
  200: "#c6c6c7",
  300: "#b0b0b1",
  400: "#9b9b9c",
  500: "#868687",
  600: "#727273",
  700: "#5e5e5f",
  800: "#4b4b4c",
  900: "#39393a",
  black: "#101011",
};

interface StackProps {
  theme: Theme;
}
const MuiStackStyle = ({ theme }: StackProps) => ({
  "&.swiper": {
    ".swiperWrapper": {
      background: "black",
    },
  },
});

export const probadaTheme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: "#FFF",
          border: "1px solid #DDD",
          borderRadius: "12px !important",
          padding: theme.spacing(2),
          marginBottom: "24px",
          boxShadow: "unset",
          "&:before": {
            display: "none",
          },
          "&:after": {
            display: "none",
          },
          "@media(max-width: 768px)": {
            padding: "0px !important",
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          display: "flex",
          "&.Mui-expanded": {
            // borderBottom: "1px solid #F3F3F4",
          },
        },
        expandIconWrapper: ({ theme }) => ({
          paddingRight: theme.spacing(1),
          "&.Mui-expanded": {
            transform: "rotate(0deg)",
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        // disableElevation: true,
      },
      styleOverrides: {
        root: {
          // width: "auto",
          textTransform: "none",
          borderRadius: "32px",
          padding: "12px 30px",
          whiteSpace: "nowrap",

          "@media(max-width: 768px)": {
            padding: "7px 24px",
          },

          "&.formBtn": {
            marginTop: "32px",
            margin: "24px auto 0 auto",
            backgroundColor: "#093550",
          },
          "&.footerBtn": {
            marginLeft: "-8px",
            backgroundColor: "#093550",
            borderRadius: " 0rem 0.375rem 0.375rem  0rem ",
          },
          "&.btnMargin": {
            marginTop: "24px",
          },
          "&.hangBuregrBtn": {
            backgroundColor: "transparent",
            boxShadow: "unset",

            "@media(max-width: 768px)": {
              padding: "0",
              display: "flex",
              justifyContent: "flex-end",
            },
          },
          "&.scrollBtn": {
            backgroundColor: "transparent",
            boxShadow: "unset",
            padding: "0",
            color: "#101011",
            width: "unset",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: "0.13rem",
          },
          "&.active": {
            color: "#D84441",

            "&.icon": {
              display: "block",
            },
          },
        },
        // sizeMedium: ({ theme }) => ({
        //   height: "36px",
        //   padding: theme.spacing(0.75, 3.75),
        // }),
        // sizeLarge: ({ theme }) => ({
        //   height: "48px",
        //   padding: theme.spacing(1, 3.75),
        // }),
        // sizeSmall: ({ theme }) => ({
        //   height: "24px",
        //   padding: theme.spacing(0.5, 3),
        // }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "12px",
          color: theme.palette.secondary.main,
          "&.selectedCard": {
            background: "#F0F4F8",
            borderColor: "#093550",
            rect: {
              fill: "#093550",
            },
          },
          "&.notSelectedCard": {
            background: "#ED4B2E0D",
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          borderTop: "1px solid #E8EBF0",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#093550",
        },
        root: ({ theme, ownerState }) => ({
          ".MuiDrawer-paper": {
            ...(!ownerState.open && {
              width: "85px !important",
            }),
          },
          ".MuiListItem-root": {
            position: "relative",
            background: "#093550",
            color: theme.palette.text.secondary,
            "& .Mui-selected": {
              ...(ownerState.open && {
                color: theme.palette.primary.main,
              }),
            },
            ".MuiListItemIcon-root": {
              color: theme.palette.text.secondary,
              ...(!ownerState.open && {
                position: "absolute",
              }),
            },
            ".Mui-selected": {
              background: "#093550",
              ...(!ownerState.open && {
                "&::before": {
                  height: "50px",
                  width: "55px",
                  background: theme.palette.primary.main,
                  content: '""', // used in conjunction with pseudo-elements
                  position: "absolute",
                  borderRadius: "16px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                },
                ".MuiListItemIcon-root": {
                  color: theme.palette.text.secondary,
                  zIndex: 1,
                },
              }),
              ...(ownerState.open && {
                "&::before": {
                  background: theme.palette.primary.main,
                  content: '""', // used in conjunction with pseudo-elements
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "6px",
                  height: "100%",
                  borderRadius: "0px 20px 20px 0px",
                },
                ".MuiListItemIcon-root": {
                  color: theme.palette.primary.main,
                },
              }),
            },
          },
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: "inline-flex",
          verticalAlign: "middle",
          borderRadius: "12px",

          "& .MuiSelect-filled": {
            paddingBlock: "16.5px",
            paddingLeft: theme.spacing(4.5),
            disableUnderline: true,
          },
        }),
      },
    },
    // This class has a lot of usage in MUI components, be wary, needs updating
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
    // Usage: i.e radio label (question)
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "0.875rem",
          fontWeight: "500",
          lineHeight: "1.25rem",
          color: theme.palette.text.secondary,
        }),
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
    MuiLink: {
      styleOverrides: {
        underlineNone: {
          textDecoration: "none",
          fontFamily: "circular",
          fontSize: "15px",
          fontWeight: "600",
          fontStyle: "normal",
          lineHeight: "22px",
          color: "#727273",
        },

        root: ({ theme }) => ({
          "&.PortfoliOH": {
            color: theme.palette.primary.main,
            fontFamily: "CircularStd-Book",
            textDecorationColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.checkboxList": {
            ".MuiListItem-root": {
              display: "flex",
              color: "#101011",
              backgroundColor: "inherit",
              padding: 0,
            },
            ".MuiListItemIcon-root": {
              minWidth: 0,
              pr: 1,
              ".MuiCheckbox-root": {
                color: theme.palette.grey[600],
              },
            },
          },
          ".MuiDivider-root": {
            borderColor: theme.palette.grey[50],
          },
          ".footerListItems": {
            padding: 0,
            paddingLeft: "0px !important",
            margin: 0,
            width: "unset !important",
          },
          "&.footerList": {
            display: "flex",
            gap: "32px",
            margin: "0",
            padding: "0",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              gap: "16px",
            },
          },
          "&.headerList": {
            display: "flex",
            gap: "32px",
            margin: "0",
            padding: "0",
            "@media(max-width: 1080px)": {
              display: "none",
            },
          },
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.tickMarkListItem": {
            display: "flex",
            alignItems: "center",
            backgroundColor: "inherit",
            disableGutters: true,
            paddingLeft: 0,
            paddingRight: 0,
            ".MuiListItemIcon-root": {
              minWidth: 0,
              paddingRight: theme.spacing(1),
            },
            ".MuiTypography-root": {
              // matches subtitle2
              fontWeight: 500,
              lineHeight: "18px",
              fontSize: "14px",
              letterSpacing: "0%",
              fontFamily: "CircularStd-Book",
            },
          },
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // maxWidth: '85px',
          // minWidth: '85px',
          textTransform: "none",
          color: "#AAAAAA",
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
          width: "100%",
          // line below states that we don't want to apply the styling if the following classnames are present
          // borderRadius: borderRadius,
          input: {
            padding: "12px 16px",
            background: "#F5F5F5",
            marginTop: "0.38rem",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.5rem",
            "&::placeholder": {
              fontSize: "1rem",
            },

            borderRadius: theme.spacing(1),
            "&:focus": {
              outline: "none",
              border: "none",
            },
          },
          "&.footerInput": {
            "&.MuiOutlinedInput-root": {
              border: "1px solid #D9D9D9",
              borderRadius: "0.375rem 0rem 0rem 0.375rem",
            },
            input: {
              background: "#fff",
              padding: "0.75rem 1rem",
              marginTop: "unset",
            },
          },
          ".MuiOutlinedInput-root": {
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.5rem",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#D9D9D9",
            },
            "&:hover fieldset": {
              borderColor: "#D9D9D9",
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #D9D9D9",
            },
          },
          "&:not(:has(.MuiInputBase-inputSizeSmall, .MuiOutlinedInput-root, .MuiInputLabel-outlined))":
            {
              background: "#F5F5F5",
              borderRadius: theme.spacing(1.5),
              border: "none",
              paddingTop: theme.spacing(1),
              paddingBottom: theme.spacing(1),
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
              marginTop: "0.38rem",
              '& label + [class*="MuiInputBase-root"][class*="MuiInput-root"]':
                {
                  marginTop: theme.spacing(0),
                },
              label: {
                paddingLeft: theme.spacing(4.5),
                marginTop: theme.spacing(-0.5),
                "&.MuiInputLabel-shrink": {
                  marginTop: theme.spacing(0),
                },
              },
            },
        }),
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: "48px",
          width: "48px",
          padding: theme.spacing(1, 2.75),
          textTransform: "none",
          fontWeight: "700",
          fontSize: "18px",
          fontStyle: "normal",
          lineHeight: "26px",
        }),
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: ({ theme }) => muiGridStyles({ theme }),
      },
    },
    MuiStack: {
      styleOverrides: {
        root: ({ theme }) => MuiStackStyle({ theme }),
      },
    },
  },

  typography: typography,

  palette: {
    mode: "light",
    text: {
      primary: "#272827",
      secondary: "#FFFFFF",
    },
    primary: {
      main: "#D84441",
      50: "#FFEFEB",
      100: "#D9D9D9",
    },
    secondary: {
      main: "#093550",
      800: "#334E66",
      600: "#547594",
      500: "#6A89A9",
      100: "#D3DEEB",
      50: "#F8F9FB",
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
    grey,
  },
});
