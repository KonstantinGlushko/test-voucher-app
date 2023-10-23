export type Friend = {
  id: number;
  name: string;
  phone: string;
};

export type Friends = Friend[];

export enum LANGUAGES {
  EN = "en",
  UK = "uk",
}

export type CreateVoucherFormFields = {
  price: number;
  friend: string;
  message: string;
};

export type CreateVoucherPayload = {
  price: number;
  friend: string;
  message: string;
};
