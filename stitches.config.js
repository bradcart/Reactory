import { createCss } from "@stitches/react";

export const { css, styled, global, theme, getCssString } = createCss({
  theme: {
    colors: {
      // hiContrast: "hsl(206,10%,5%)",
      // loContrast: "white",

      /* Brand colors */

      white: "#fff",

      black100: "#111",
      black200: "#1d1d1d",
      black300: "#252525",
      black400: "#2b2b2b",

      gray100: "#333",
      gray200: "#444",
      gray300: "#555",
      gray400: "#666",
      gray500: "#777",
      gray600: "#999",

      toolboxRadial:
        "radial-gradient(45.31% 45.31% at 50% 50%, #F0F5F3 0%, #D8D8D8 100%)",

      viridian: "#57886c",
      orange: "#fb4d3d",
      pine: "#0a6e69",
      yellow: "#f3b700",
      red: "#960200",

      /* ------------ */

      // slate200: "#d8dddb",
      // slate300: "#c0c4c2",
      // slate400: "#a8acaa",
      // slate500: "#909392",
      // slate600: "#787b7a",
      // slate700: "#606261",
      // slate800: "#484949",
      // slate900: "#303131",

      // pine100: "#021817",
      // pine200: "#04312f",
      // pine300: "#063d3b",
      // pine400: "#074946",
      // pine500: "#085552",
      // pine600: "#09625e",
      // pine700: "#0a6e69",
      // pine800: "#0b7a75",
      // pine900: "#238783",
      // pine1000: "#3c9591",

      // yellow100: "#926e00",
      // yellow200: "#aa8000",
      // yellow300: "#c29200",
      // yellow400: "#dba500",
      // yellow500: "#f3b700",
      // yellow600: "#f4be1a",
      // yellow700: "#f5c533",
      // yellow800: "#f7cd4d",
      // yellow900: "#f8d466",
      // yellow1000: "#f9db80",

      // orange100: "#763800",
      // orange200: "#8a4100",
      // orange300: "#9e4a00",
      // orange400: "",
      // orange500: "",
      // orange600: "",
      // orange700: "",
      // orange800: "",
      // orange900: "",
      // orange1000: "",

      // red100: "#5a0100",
      // red200: "#690100",
      // red300: "#780200",
      // red400: "#870200",
      // red500: "#960200",
      // red600: "#a11b1a",
      // red700: "#ab3533",
      // red800: "#b64e4d",
      // red900: "#c06766",
      // red1000: "#cb8180",

      // violet100: "",
      // violet100: "",
      // violet100: "",
      // violet100: "",
      // violet100: "",
      // violet100: "",
      // violet100: "",
      // violet100: "",
      // violet100: "",
      // violet100: "",

      // purple100: "hsl(252,100%,99%)",
      // purple200: "hsl(252,100%,98%)",
      // purple300: "hsl(252,100%,94%)",
      // purple400: "hsl(252,75%,84%)",
      // purple500: "hsl(252,78%,60%)",
      // purple600: "hsl(252,80%,53%)",
      // purple700: "",
      // purple800: "",
      // purple900: "",
      // purple1000: "",

      // blue100: "",
      // blue100: "",
      // blue100: "",
      // blue100: "",
      // blue100: "",
      // blue100: "",
      // blue100: "",
      // blue100: "",
      // blue100: "",
      // blue100: "",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "27px",
      8: "35px",
      9: "59px",
    },
    fonts: {
      system: "system-ui",
    },
    radii: {
      1: "4px",
      2: "6px",
      3: "10px",
      round: "50%",
      pill: "9999px",
    },
  },
  utils: {
    p: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value) => ({
      paddingTop: value,
    }),
    pr: (config) => (value) => ({
      paddingRight: value,
    }),
    pb: (config) => (value) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value) => ({
      paddingLeft: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
  media: {
    bp1: "@media (min-width: 520px)",
    bp2: "@media (min-width: 900px)",
    bp3: "@media (min-width: 1200px)",
    bp4: "@media (min-width: 1800px)",
  },
});
