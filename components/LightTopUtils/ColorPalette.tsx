import { useTheme } from "contexts/ThemeProvider";
import React from "react";
import styles from "./ColorPalette.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ColorPalette = () => {
  const { selectedTextColor, textColorPalette } = useTheme();
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
              className={cx({ palette_item: true })}
              style={{ backgroundColor: palette }}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPalette;
