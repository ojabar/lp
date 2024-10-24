export type ProductType = {
  id?: string | number;
  permalink?: string;
  title?: string;
  price?: ProductPriceType;
  media?: ProductMediaType[];
  characteristics?: ProductCharacteristicType[];
  reviews?: ProductReviewType[];
};

type ProductPriceType = {
  default: number;
  new?: number;
  reduction?: string;
};

type ProductMediaType = {
  type: "image" | "video";
  src?: string;
  width?: number;
  height?: number;
};

type ProductCharacteristicType = {
  label: string;
  value?: string;
};

type ProductReviewType = {
  image: string;
};
