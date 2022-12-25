import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { useTheme } from "contexts/ThemeProvider";

const cx = classNames.bind(styles);

const Footer = () => {
  const { selectedTextColor } = useTheme();

  return (
    <div className={cx({ wrapper: true })}>
      <footer style={{ color: selectedTextColor, fontSize: "1.2rem" }}>
        2022, by Kimyechan
      </footer>
    </div>
  );
};

export default Footer;
