import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import clsx from "clsx";

// Internal imports
import { FRIENDS } from "../../__mocks__/stub";
import SearchIcon from "../../assets/icons/search.svg";
import CloseIcon from "../../assets/icons/close.svg";
import { ROUTES } from "../../constants";
import { CreateVoucherFormFields, CreateVoucherPayload, Friend } from "../../types";
import styles from "./CreateVoucher.module.scss";

export const CreateVoucher: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [voucherSubmitted, setVoucherSubmitted] = useState<CreateVoucherPayload | null>(null);
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<CreateVoucherFormFields>({
    defaultValues: {
      price: 100,
      friend: "",
      message: "",
    },
  });

  const priceValue = watch("price");
  const friendValue = watch("friend");

  const onSubmit = (data: CreateVoucherFormFields) => {
    setVoucherSubmitted(data);
  };

  const handleSelectFriend = (friend: Friend) => {
    setValue("friend", friend.name);
    clearErrors("friend");
    setOpenDropdown(false);
  };

  const validateFriendField = (value: string) => !!FRIENDS.find((friend) => friend.name === value);

  const getFilteredFriends = () =>
    FRIENDS.filter(
      (friend) => friend.name.includes(friendValue) || friend.phone.includes(friendValue) || friendValue === ""
    );

  const voucherCardStyles = () => {
    if (priceValue < 300) {
      return styles.whiteVoucher;
    } else if (priceValue < 500) {
      return styles.silverVoucher;
    } else {
      return styles.blackVoucher;
    }
  };

  const voucherCardTitle = () => {
    if (priceValue < 300) {
      return t("voucher-white-title");
    } else if (priceValue < 500) {
      return t("voucher-silver-title");
    } else {
      return t("voucher-black-title");
    }
  };

  if (voucherSubmitted) {
    return (
      <div className={styles.congratsContainer}>
        {t("voucher-congrats-text", {
          title: voucherCardTitle(),
          friend: voucherSubmitted.friend,
          message: voucherSubmitted.message,
        })}
        <button className={styles.congratsButton} onClick={() => navigate(ROUTES.ROOT)}>
          {t("voucher-congrats-button")}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.voucherCardWrapper}>
        <img src={CloseIcon} className={styles.closeIcon} alt="close" onClick={() => navigate(ROUTES.ROOT)} />
        <div className={clsx(styles.voucherCard, voucherCardStyles())}>
          <p className={styles.voucherCardTitle}>{voucherCardTitle()}</p>
          <div className={styles.voucherCardFriend}>{t("voucher-holder", { name: friendValue })}</div>
          <div>{t("voucher-price", { price: priceValue })}</div>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formItem}>
          <label>{t("voucher-price-label")}</label>
          <input type="range" min="100" max="500" step={50} {...register("price")} />
        </div>
        <div className={styles.formItem}>
          <label>{t("voucher-friend-label")}</label>
          <div className={styles.searchInputWrapper}>
            <Controller
              control={control}
              name="friend"
              rules={{ validate: { validateFriendField } }}
              render={(params) => (
                <input
                  {...params.field}
                  autoComplete="off"
                  type="text"
                  className={styles.searchInput}
                  placeholder={t("voucher-friend-placeholder")}
                  onFocus={() => {
                    setOpenDropdown(true);
                  }}
                  onChange={(e) => {
                    setOpenDropdown(true);
                    params.field.onChange(e);
                  }}
                  onBlur={() => {
                    setOpenDropdown(false);
                    params.field.onBlur();
                  }}
                />
              )}
            />
            <img src={SearchIcon} className={styles.searchIcon} alt="search" />
            {openDropdown && (
              <div className={styles.list}>
                {getFilteredFriends().length > 0 ? (
                  getFilteredFriends().map((friend) => {
                    return (
                      <div
                        key={friend.id}
                        className={styles.listItem}
                        onMouseDown={(e) => e.preventDefault()} // prevent input blur
                        onClick={(e) => {
                          handleSelectFriend(friend);
                        }}
                      >{`${friend.name} (${friend.phone})`}</div>
                    );
                  })
                ) : (
                  <div className={styles.noFriendsFound}>{t("voucher-no-friends-found")}</div>
                )}
              </div>
            )}
          </div>
          {errors.friend && <span className={styles.formError}>{t("voucher-friend-error")}</span>}
        </div>
        <div className={styles.formItem}>
          <label>{t("voucher-message-label")}</label>
          <textarea
            className={styles.messageInput}
            placeholder={t("voucher-message-placeholder")}
            rows={8}
            {...register("message", { required: true })}
          />
          {errors.message && <span className={styles.formError}>{t("voucher-message-error")}</span>}
        </div>
        <button type="submit" className={styles.submitButton}>
          {t("voucher-submit-button")}
        </button>
      </form>
    </div>
  );
};
