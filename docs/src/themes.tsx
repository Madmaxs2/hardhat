import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createTheming } from "@callstack/react-theme-provider";

export { styled } from "linaria/react";

export enum ThemesEnum {
  LIGHT = "LIGHT",
  DARK = "DARK",
  HC_DARK = "HC_DARK",
  AUTO = "AUTO",
}
export const breakpoints = {
  xs: 360,
  sm: 412,
  md: 1000,
};

export const media = {
  xs: `@media screen and (min-width: ${breakpoints.xs}px)`,
  sm: `@media screen and (min-width: ${breakpoints.sm}px)`,
  md: `@media screen and (min-width: ${breakpoints.md}px)`,
  mqDark: "@media (prefers-color-scheme: dark)",
};

export const tmSelectors = {
  dark: "body.DARK &",
  hcDark: "body.HC_DARK &",
  auto: "body.AUTO &",
};

export const lightPalette = {
  name: "Light",
  transparent: "transparent",
  neutral0: "#FFFFFF",
  neutral100: "#F2F2F2",
  neutral200: "#FCFCF1",
  neutral400: "#C4C4C4",
  neutral500: "#4B4D4D",
  neutral600: "#6E6F70",
  neutral700: "#9B9FA8",
  neutral800: "#16181D",
  neutral900: "#0A0A0A",
  accent100: "#FBFCDB",
  accent600: "#FFF04D",
  accent700: "#CCB200",
  accent800: "#FFF100",
  accent900: "#EDCF00",
  border: "#4B4D4D",
  tableBorder: "#DFE2E5",
  tipBorderColor: "#42B983",
  tipBackgroundColor: "#F3F5F7",
  warningColorTitle: "#F08D49",
  warningColorText: "#0A0A0A",
  warningBorderColor: "#F08D49",
  warningBackgroundColor: "#FEF6F1",
  codeBackground: "rgba(27,31,35,.05)",
  codeColor: "#4A4D54",
  preCodeColor: "#FFFFFF",
  codeBlockBackground: "#282c34",
  codeBlockBorder: "#282c34",
  complementary600: "#E9DEFA",
  cardBoxShadow: "#0A0A0A14",
  sliderButtonShadow: "rgba(0, 0, 0, 0.102)",
  sliderButtonHoverShadow: "hsl(0deg 0% 83% / 50%)",
  toolsBlockBorder: "#d4d4d4",
  mottoRunnerBackground: "#F8F4CB",
  mottoNetworkBackground: "#f6edd1",
  mottoIgnitionBackground: "#f3ecf3",
  mottoVscodeBackground: "#f0e7fb",
  getStartedTopBackground:
    "linear-gradient(180deg, #ffffff 3.12%, rgba(255, 255, 255, 0) 67.71%)",
  getStartedBottomBackground:
    "linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 55.73%)",
  textureBackground:
    "linear-gradient(254.24deg, #E9DEFA 0%, #FBFCDB 100%, #FBFCDB 100%);",
  neutralBackground:
    "linear-gradient(180deg, #FFFFFF 7.96%, rgba(255, 255, 255, 0.484844) 18.71%, rgba(255, 255, 255, 0) 28.83%, rgba(255, 255, 255, 0) 68.82%, #FFFFFF 91.43%);",
  link: "#CCB200",
  autoThemeButton: "#6C6F74",
  editPageColor: "#C4C4C4",
  tagBackground: "#E5E6E7",
  tabBackground: "#FBFBFB",
  tabBackgroundHover: "#48484d",
  tabBackgroundSelected: "#282C34",
};

export const darkPalette = {
  name: "Dark",
  transparent: "transparent",
  neutral0: "#20232A",
  neutral100: "#F2F2F2",
  neutral200: "#20232A",
  neutral400: "#4B4D4D",
  neutral500: "#4B4D4D",
  neutral600: "#6E6F70",
  neutral700: "#9B9FA8",
  neutral800: "#D2D3D5",
  neutral900: "#FFFFFF",
  accent100: "#FBFCDB",
  accent600: "#FFF04D",
  accent700: "#CCB200",
  accent800: "#FFF100",
  accent900: "#EDCF00",
  border: "#4B4D4D",
  tableBorder: "#DFE2E5",
  tipBorderColor: "#246648",
  tipBackgroundColor: "#282C34",
  warningColorTitle: "#9F5D30",
  warningColorText: "#D2D3D5",
  warningBorderColor: "#9F5D30",
  warningBackgroundColor: "#282C34",
  codeBackground: "#20232A",
  codeColor: "#8e9094",
  preCodeColor: "#8e9094",
  codeBlockBackground: "#16181D",
  codeBlockBorder: "#6c6f74",
  complementary600: "#E9DEFA",
  cardBoxShadow: "#0A0A0A14",
  sliderButtonShadow: "rgba(0, 0, 0, 0.102)",
  sliderButtonHoverShadow: "hsl(0deg 0% 83% / 50%)",
  toolsBlockBorder: "#d4d4d4",
  mottoRunnerBackground: "#F8F4CB",
  mottoNetworkBackground: "#f6edd1",
  mottoIgnitionBackground: "#f3ecf3",
  mottoVscodeBackground: "#f0e7fb",
  getStartedTopBackground:
    "linear-gradient(180deg, #ffffff 3.12%, rgba(255, 255, 255, 0) 67.71%)",
  getStartedBottomBackground:
    "linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 55.73%)",
  textureBackground:
    "linear-gradient(254.24deg, #E9DEFA 0%, #FBFCDB 100%, #FBFCDB 100%);",
  neutralBackground:
    "linear-gradient(180deg, #FFFFFF 7.96%, rgba(255, 255, 255, 0.484844) 18.71%, rgba(255, 255, 255, 0) 28.83%, rgba(255, 255, 255, 0) 68.82%, #FFFFFF 91.43%);",
  link: "#CCB200",
  autoThemeButton: "#6C6F74",
  editPageColor: "#D2D3D5",
  tagBackground: "#16181D",
  tabBackground: "#181A1F",
  tabBackgroundHover: "#282C34",
  tabBackgroundSelected: "#E5E6E7",
} as Palette;

export const hcDarkPalette = {
  name: "Dark HC",
  transparent: "transparent",
  neutral0: "#16181D",
  neutral100: "#F2F2F2",
  neutral200: "#16181D",
  neutral400: "#4B4D4D",
  neutral500: "#4B4D4D",
  neutral600: "#6E6F70",
  neutral700: "#9B9FA8",
  neutral800: "#B0B2B5",
  neutral900: "#FFFFFF",
  accent100: "#FBFCDB",
  accent600: "#FFF04D",
  accent700: "#CCB200",
  accent800: "#FFF100",
  accent900: "#EDCF00",
  border: "#4B4D4D",
  tableBorder: "#DFE2E5",
  tipBorderColor: "#246648",
  tipBackgroundColor: "#282C34",
  warningColorTitle: "#9F5D30",
  warningColorText: "#D2D3D5",
  warningBorderColor: "#9F5D30",
  warningBackgroundColor: "#282C34",
  codeBackground: "#20232a",
  codeColor: "#8e9094",
  preCodeColor: "#8e9094",
  codeBlockBackground: "#20232a",
  codeBlockBorder: "#6c6f74",
  complementary600: "#E9DEFA",
  cardBoxShadow: "#0A0A0A14",
  sliderButtonShadow: "rgba(0, 0, 0, 0.102)",
  sliderButtonHoverShadow: "hsl(0deg 0% 83% / 50%)",
  toolsBlockBorder: "#d4d4d4",
  mottoRunnerBackground: "#F8F4CB",
  mottoNetworkBackground: "#f6edd1",
  mottoIgnitionBackground: "#f3ecf3",
  mottoVscodeBackground: "#f0e7fb",
  getStartedTopBackground:
    "linear-gradient(180deg, #ffffff 3.12%, rgba(255, 255, 255, 0) 67.71%)",
  getStartedBottomBackground:
    "linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 55.73%)",
  textureBackground:
    "linear-gradient(254.24deg, #E9DEFA 0%, #FBFCDB 100%, #FBFCDB 100%);",
  neutralBackground:
    "linear-gradient(180deg, #FFFFFF 7.96%, rgba(255, 255, 255, 0.484844) 18.71%, rgba(255, 255, 255, 0) 28.83%, rgba(255, 255, 255, 0) 68.82%, #FFFFFF 91.43%);",
  link: "#CCB200",
  autoThemeButton: "#6C6F74",
  editPageColor: "#B0B2B5",
  tagBackground: "#20232A",
  tabBackground: "#282C34",
  tabBackgroundHover: "#181A1F",
  tabBackgroundSelected: "#E5E6E7",
} as Palette;

type Palette = typeof lightPalette;

export const appTheme = {
  light: {
    colors: lightPalette,
  },
  dark: {
    colors: darkPalette,
  },
  hcDark: {
    colors: hcDarkPalette,
  },
  media,
  breakpoints,
  tmSelectors,
};

const themesArray = Object.values(ThemesEnum);

export const getNextTheme = (currentTheme: ThemesEnum): ThemesEnum => {
  const currentThemeIndex = themesArray.indexOf(currentTheme);
  const nextThemeIndex =
    currentThemeIndex === themesArray.length - 1 ? 0 : currentThemeIndex + 1;
  const nextTheme = themesArray[nextThemeIndex];
  return nextTheme;
};

export const theming = createTheming(appTheme);

interface IThemeContext {
  theme: ThemesEnum;
  changeTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: ThemesEnum.AUTO,
  changeTheme: () => {},
});

export const ThemeProvider = ({
  children,
}: React.PropsWithChildren<{}>): JSX.Element => {
  const [theme, setTheme] = useState<ThemesEnum>(ThemesEnum.AUTO);

  const changeTheme = useCallback(() => {
    const body = document.querySelector("body") as Element;
    const newTheme = ThemesEnum[getNextTheme(theme)];
    body.className = newTheme;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }, [theme, setTheme]);

  const initialContext = useMemo(
    () => ({ theme, changeTheme }),
    [theme, changeTheme]
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemesEnum;
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={initialContext}>
      {/* @ts-ignore */}
      <theming.ThemeProvider theme={appTheme}>{children}</theming.ThemeProvider>
    </ThemeContext.Provider>
  );
};

type ThemeSelect<T> = (tm: T) => string;

export const tm = (cb: ThemeSelect<{ colors: Palette }>) => () =>
  ((fn) => fn(theming.useTheme().light))(cb);

export const tmDark = (cb: ThemeSelect<{ colors: Palette }>) => () =>
  ((fn) => fn(theming.useTheme().dark))(cb);

export const tmHCDark = (cb: ThemeSelect<{ colors: Palette }>) => () =>
  ((fn) => fn(theming.useTheme().hcDark))(cb);
