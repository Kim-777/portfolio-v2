import { TextColor, useTheme } from "contexts/ThemeProvider";
import React from "react";
import styles from "./ColorPalette.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ColorPalette = () => {
  const { selectedTextColor, textColorPalette, setSelectedTextColor } =
    useTheme();
  const [isOpenPalette, setIsOpenPalette] = React.useState<boolean>(false);
  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => {
          setIsOpenPalette((prev) => !prev);
        }}
        style={{ fontSize: "1.2rem", color: selectedTextColor }}
      >
        {selectedTextColor}
      </button>
      {isOpenPalette && (
        <div className={cx({ palette: true })}>
          {textColorPalette.map((palette) => (
            <button
              key={palette}
              className={cx({ palette_item: true })}
              style={{ backgroundColor: palette }}
              onClick={() => {
                setSelectedTextColor(palette as TextColor);
              }}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPalette;
