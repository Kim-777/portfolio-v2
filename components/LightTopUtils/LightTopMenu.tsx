import React from "react";
import styles from "./LightTopMenu.module.scss";
import classNames from "classnames/bind";
import BackgroundColorSwitch from "./BackgroundColorSwitch";
import LanguageBox from "./LanguageBox";
import ColorPalette from "./ColorPalette";

const cx = classNames.bind(styles);

const LightTopMenu = () => {
  return (
    <div className={cx({ wrapper: true })}>
      <BackgroundColorSwitch />
      <ColorPalette />
      <LanguageBox />
    </div>
  );
};

export default LightTopMenu;
