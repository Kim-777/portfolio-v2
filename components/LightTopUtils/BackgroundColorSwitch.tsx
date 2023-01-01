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
          btn: true,
          [selectedBackground]: true,
        })}
        style={{ color: selectedTextColor }}
        onClick={toggleBackgound}
        title={
          selectedBackground === "light"
            ? "다크모드로 변경"
            : "라이트모드로 변경"
        }
      >
        <figure>
          <span role="img" aria-label="toggle-btn-img">
            {selectedBackground === "light" ? "🌞" : "🌜"}
          </span>
        </figure>
        <p>{selectedBackground}</p>
      </button>
    </div>
  );
};

export default BackgroundColorSwitch;
