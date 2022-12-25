import React, { createContext, ReactNode, useContext } from "react";

export type Backgrounds = "light" | "dark";

type TextColor =
  | "#FFF"
  | "#eaeac4"
  | "#eaeac4"
  | "#000"
  | "#0f0e0e"
  | "#201818";

const textColorsWhenDark = ["#FFF", "#eaeac4", "#eaeac4"];
const textColorsWhenLight = ["#000", "#0f0e0e", "#201818"];

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
      console.log("selectedBackground ::: ", selectedBackground);
      setSelectedBackground("dark");
      return;
    }

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
