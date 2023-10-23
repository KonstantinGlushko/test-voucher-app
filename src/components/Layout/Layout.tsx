import { FC } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

// Internal imports
import { LANGUAGES } from "../../types";
import styles from "./Layout.module.scss";
import { PageLoader } from "../PageLoader/PageLoader";

export const Layout: FC = () => {
  const { i18n } = useTranslation();
  const navigation = useNavigation();

  const changeLanguage = (lng: LANGUAGES) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>Voucher.com</span>
        <div className={styles.languageButtons}>
          <span
            className={clsx(i18n.language === LANGUAGES.EN && styles.activeLanguage)}
            onClick={() => changeLanguage(LANGUAGES.EN)}
          >
            EN
          </span>
          or
          <span
            className={clsx(i18n.language === LANGUAGES.UK && styles.activeLanguage)}
            onClick={() => changeLanguage(LANGUAGES.UK)}
          >
            UK
          </span>
        </div>
      </header>
      {navigation.state === "loading" && <PageLoader />}
      <Outlet />
    </div>
  );
};
