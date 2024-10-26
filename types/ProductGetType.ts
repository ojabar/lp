export type ProductGetType = {
  product?: ProductPageType;
};

export type ProductPageType = {
  body?: (ProductPageBody)[];
  seo?: SEO;
  socialMedia?: SocialMedia[];
};

export type ComponentBlockTopBanner = {
  __typename: "ComponentBlockTopBanner";
  id?: string;
  title?: string;
  subTitle?: string;
  topBannerImage?: Image[];
  price?: number;
  priceBar?: number;
};

export type ComponentBlockSectionPrimary = {
  __typename: "ComponentBlockSectionPrimary";
  id?: string;
  sectionTitle?: any;
  sectionPrimaryItems?: SectionPrimaryItem[];
};

export type ComponentBlockSectionSecondary = {
  __typename: "ComponentBlockSectionSecondary";
  id?: string;
  title?: string;
  image?: Image;
  sectionSecondaryItems?: SectionSecondaryItem[];
};

export type ComponentBlockSectionDefault = {
  __typename: "ComponentBlockSectionDefault";
  id?: string;
  title?: string;
  subTitle?: string;
  items?: Item[];
};

export type ComponentBlockSectionPromotions = {
  __typename: "ComponentBlockSectionPromtions";
  id?: string;
  title?: string;
  subTitle?: string;
  items?: Array<{
    image?: Image;
    priceNew?: number;
    priceOld?: number;
  }>;
};

export type ComponentBlockSectionReviews = {
  __typename: "ComponentBlockSectionReviews";
  id?: string;
  title?: string;
  items?: Array<{
    id?: string;
    title?: string;
    msg?: string;
    review?: number;
  }>;
};

export type ComponentBlockCms = {
  __typename: "ComponentBlockCms";
  id?: string;
  Text?: any;
};

export type ComponentBlockSectionCompare = {
  __typename: "ComponentBlockSectionCompare";
  id?: string;
  title?: string;
  items?: Array<{
    id?: string;
    image?: Image;
    title?: string;
  }>;
};

export type ComponentFromCheckout = {
  __typename: "ComponentFromCheckout";
  id?: string;
  title?: string;
};

export type ComponentBlockSectionMedia = {
  __typename: "ComponentBlockSectionMedia";
  id?: string;
  medias?: MediaBlock[];
};

export type ComponentCommonSpacer = {
  __typename: "ComponentCommonSpacer";
  id?: string;
  tablet?: number;
  mobile?: number;
  desktop?: number;
};

export type MediaBlock = {
  id?: string;
  url: string;
  name: string;
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

export type ProductPageBody =
  | ComponentBlockTopBanner
  | ComponentBlockSectionPrimary
  | ComponentBlockSectionSecondary
  | ComponentBlockSectionDefault
  | ComponentBlockSectionPromotions
  | ComponentBlockSectionReviews
  | ComponentBlockCms
  | ComponentBlockSectionCompare
  | ComponentFromCheckout
  | ComponentBlockSectionMedia
  | ComponentCommonSpacer;
