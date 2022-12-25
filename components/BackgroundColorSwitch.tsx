import React from "react";
import { useTheme } from "../contexts/ThemeProvider";
import classNames from "classnames/bind";
import styles from "./BackgroundColorSwitch.module.scss";

const cx = classNames.bind(styles);

const BackgroundColorSwitch = () => {
  const { selectedBackground, toggleBackgound } = useTheme();
  return (
    <button
      className={cx({
        [selectedBackground]: true,
      })}
      onClick={toggleBackgound}
    >
      {selectedBackground}
    </button>
  );
};

export default BackgroundColorSwitch;
