import { BACKGROUND_KEY } from "constants/key";
import React, { createContext, ReactNode, useContext } from "react";

export type Backgrounds = "light" | "dark";

export type TextColor =
  | "#FFF"
  | "#ffffeb"
  | "#e7e7af"
  | "#cfdbed"
  | "#571c1c"
  | "#322020"
  | "#080812"
  | "#000";

const textColorsWhenDark = ["#FFF", "#ffffeb", "#e7e7af", "#cfdbed"];
const textColorsWhenLight = ["#571c1c", "#322020", "#080812", "#000"];

export type TextColors = typeof textColorsWhenDark | typeof textColorsWhenLight;

const mapperColorPalette = {
  light: textColorsWhenLight,
  dark: textColorsWhenDark,
};

type ThemeContextProps = {
  selectedBackground: Backgrounds;
  setSelectedBackground: (back: Backgrounds) => void;
  textColorPalette: TextColors;
  selectedTextColor: TextColor;
  setSelectedTextColor: (color: TextColor) => void;
  toggleBackgound: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  selectedBackground: "light",
  setSelectedBackground(back) {},
  textColorPalette: mapperColorPalette.light,
  selectedTextColor: "#000",
  setSelectedTextColor(color) {},
  toggleBackgound() {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [selectedBackground, setSelectedBackground] =
    React.useState<Backgrounds>("light");

  const [selectedTextColor, setSelectedTextColor] =
    React.useState<TextColor>("#000");

  const toggleBackgound = React.useCallback(() => {
    if (selectedBackground === "light") {
      localStorage.setItem(BACKGROUND_KEY, "dark");
      setSelectedBackground("dark");
      return;
    }

    localStorage.setItem(BACKGROUND_KEY, "light");
    setSelectedBackground("light");
  }, [selectedBackground]);

  React.useEffect(() => {
    setSelectedTextColor(
      mapperColorPalette[selectedBackground][0] as TextColor
    );
  }, [selectedBackground]);

  return (
    <ThemeContext.Provider
      value={{
        selectedBackground,
        setSelectedBackground,
        textColorPalette: mapperColorPalette[selectedBackground],
        selectedTextColor,
        setSelectedTextColor,
        toggleBackgound,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
