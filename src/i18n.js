import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        "loading-text": "Loading...",
        "landing-title": "Welcome to the Voucher Shop",
        "landing-action-text": "Create a voucher to send to your friend",
        "landing-action-label": "Create a Voucher",
        "voucher-white-title": "White Voucher",
        "voucher-silver-title": "Silver Voucher",
        "voucher-black-title": "Black Voucher",
        "voucher-holder": "Holder: {{name}}",
        "voucher-price": "{{price}} USD",
        "voucher-price-label": "Select voucher price",
        "voucher-friend-label": "Select a friend *",
        "voucher-friend-placeholder": "Type here to search for friend",
        "voucher-friend-error": "Please select a friend from the list",
        "voucher-no-friends-found": "No friends found",
        "voucher-message-label": "Enter a message *",
        "voucher-message-placeholder": "Type here to enter a message",
        "voucher-message-error": "Please enter a message",
        "voucher-submit-button": "Pay & Send",
        "voucher-congrats-text":
          "Congratulations!\n We sent {{title}} to {{friend}} on email\n with text:\n {{message}}",
        "voucher-congrats-button": "Back to home page",
      },
    },
    uk: {
      translations: {
        "loading-text": "Завантаження...",
        "landing-title": "Ласкаво просимо до магазину ваучерів",
        "landing-action-text": "Створіть ваучер, щоб відправити другу",
        "landing-action-label": "Створити ваучер",
        "voucher-white-title": "White Ваучер",
        "voucher-silver-title": "Silver Ваучер",
        "voucher-black-title": "Black Ваучер",
        "voucher-holder": "Holder: {{name}}",
        "voucher-price": "{{price}} UAH",
        "voucher-price-label": "Обери ціну ваучера",
        "voucher-friend-label": "Оберіть друга *",
        "voucher-friend-placeholder": "Введіть ім'я друга",
        "voucher-friend-error": "Будь-ласка, оберіть друга зі списку",
        "voucher-no-friends-found": "Друзів  не знайдено",
        "voucher-message-label": "Введіть повідомлення *",
        "voucher-message-placeholder": "Введіть повідомлення",
        "voucher-message-error": "Будь-ласка, введіть повідомлення",
        "voucher-submit-button": "Оплатити та відправити",
        "voucher-congrats-text":
          "Вітаємо!\n Ми відправили {{title}} на електронну пошту {{friend}}\n з текстом:\n {{message}}",
        "voucher-congrats-button": "Повернутися на головну сторінку",
      },
    },
  },
  fallbackLng: "en",
  debug: true,

  interpolation: {
    escapeValue: false,
  },

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
});

export default i18n;
