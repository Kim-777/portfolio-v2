import React from "react";
import { useTheme } from "contexts/ThemeProvider";
import classNames from "classnames/bind";
import styles from "./BackgroundColorSwitch.module.scss";

const cx = classNames.bind(styles);

const BackgroundColorSwitch = () => {
  const { selectedBackground, toggleBackgound, selectedTextColor } = useTheme();
  return (
    <div>
      <button
        className={cx({
          [selectedBackground]: true,
        })}
        style={{ color: selectedTextColor }}
        onClick={toggleBackgound}
      >
        {selectedBackground}
      </button>
    </div>
  );
};

export default BackgroundColorSwitch;
