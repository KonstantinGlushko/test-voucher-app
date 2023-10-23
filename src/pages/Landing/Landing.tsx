import { FC } from "react";
import { useNavigate } from "react-router-dom";

// Internal imports
import { ROUTES } from "../../constants";
import styles from "./Landing.module.scss";
import { useTranslation } from "react-i18next";

export const Landing: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>{t("landing-title")}</h1>
      <h2>{t("landing-action-text")}</h2>
      <button className={styles.createVoucherButton} onClick={() => navigate(ROUTES.CREATE_VOUCHER)}>
        {t("landing-action-label")}
      </button>
    </div>
  );
};
