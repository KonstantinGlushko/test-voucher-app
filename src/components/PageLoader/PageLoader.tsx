import { FC } from "react";
import { useTranslation } from "react-i18next";

// Internal imports
import logo from "../../logo.svg";
import styles from "./PageLoader.module.scss";

export const PageLoader: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>{t("loading-text")}</h1>
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  );
};
