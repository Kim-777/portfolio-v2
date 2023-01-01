import React from "react";
import { useTheme } from "contexts/ThemeProvider";
import classNames from "classnames/bind";
import styles from "./BackgroundColorSwitch.module.scss";
import Image from "next/image";

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
        <figure style={{ width: "20px", height: "20px" }}>
          {/* <span role="img" aria-label="toggle-btn-img">
            {selectedBackground === "light" ? "🌞" : "🌜"}
          </span> */}
          {selectedBackground === "light" ? (
            <Image
              width={20}
              height={20}
              src="/images/sun.png"
              alt="sun"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <Image
              width={20}
              height={20}
              src="/images/moon.png"
              alt="moon"
              style={{ objectFit: "contain" }}
            />
          )}
        </figure>
        <p>{selectedBackground}</p>
      </button>
    </div>
  );
};

export default BackgroundColorSwitch;
