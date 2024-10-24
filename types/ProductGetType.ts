export type ProductGetType = {
  product?: ProductPageType;
};

export type ProductPageType = {
  body?: ProductPageBody[];
  seo?: SEO;
  socialMedia?: SocialMedia[];
};

export type ProductPageBody = {
  __typename?:
    | "ComponentBlockTopBanner"
    | "ComponentBlockCms"
    | "ComponentBlockSectionPrimary"
    | "ComponentBlockSectionSecondary"
    | "ComponentBlockSectionDefault"
    | "ComponentBlockSectionPromtions"
    | "ComponentFromCheckout"
    | "ComponentBlockSectionReviews";
  id?: string;
  title?: string;
  subTitle?: string;
  Text?: any;
  topBannerImage?: Image[];
  price?: number;
  sectionTitle?: SectionTitle[];
  sectionPrimaryItems?: SectionPrimaryItem[];
  image?: Image;
  sectionSecondaryItems?: SectionSecondaryItem[];
  items?: Item[];
};

export type Image = {
  url?: string;
};

export type Item = {
  id?: string;
  image?: Image;
  title?: string;
  msg?: string;
  description?: Description[];
  priceNew?: number;
  priceOld?: number;
  review?: number;
};

export type Description = {
  type?: string;
  children?: DescriptionChild[];
};

export type DescriptionChild = {
  type?: string;
  text?: string;
};

export type SectionPrimaryItem = {
  id?: string;
  title?: string;
  description?: Description[];
  image?: Image;
};

export type SectionSecondaryItem = {
  id?: string;
  icon?: IconType | null;
  title?: string;
  description?: string;
};

export type IconType = {
  name?: string;
  value?: string;
};

export type SectionTitle = {
  type?: string;
  children?: SectionTitleChild[];
};

export type SectionTitleChild = {
  type?: string;
  text?: string;
  bold?: boolean;
};

export type SEO = {
  title?: string;
  description?: string;
  permalink?: string;
  image?: Image | null;
};

export type SocialMedia = {
  text: string;
  link: string;
  icon: IconType | null;
};
