import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx({ wrapper: true })}>
      <footer>2022 by Kimyechan</footer>
    </div>
  );
};

export default Footer;
