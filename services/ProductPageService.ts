import type { ProductGetType } from "~/types/ProductGetType";

export default class ProductPageService {
  fetch(options: { productId: string; locale: string }) {
    const query = gql`
      query Product($documentId: ID!, $locale: I18NLocaleCode) {
        product(documentId: $documentId, locale: $locale) {
          body {
            ... on ComponentBlockTopBanner {
              __typename
              id
              title
              subTitle
              topBannerImage: image {
                url
              }
              price
            }
            ... on ComponentBlockSectionPrimary {
              __typename
              id
              sectionTitle: title
              sectionPrimaryItems: items {
                id
                title
                description
                image {
                  url
                }
              }
            }
            ... on ComponentBlockSectionSecondary {
              __typename
              id
              title
              image {
                url
              }
              sectionSecondaryItems: items {
                id
                icon {
                  name
                  value
                }
                title
                description
              }
            }
            ... on ComponentBlockSectionDefault {
              __typename
              id
              title
              subTitle
              items {
                id
                image {
                  url
                }
                title
                description
              }
            }
            ... on ComponentBlockSectionPromtions {
              __typename
              id
              title
              subTitle
              items {
                image {
                  url
                }
                priceNew
                priceOld
              }
            }
            ... on ComponentBlockSectionReviews {
              __typename
              id
              title
              items {
                id
                title
                msg: description
                review
              }
            }
            ... on ComponentBlockCms {
              id
              Text
            }
            ... on ComponentBlockSectionCompare {
              id
              title
              items {
                id
                image {
                  url
                }
                title
              }
            }
            ... on ComponentFromCheckout {
              __typename
              id
              title
            }
          }
          seo {
            title
            description
            permalink
            image {
              url
            }
          }
          socialMedia {
            text
            link
            icon {
              name
              value
            }
          }
        }
      }
    `;

    // const { data } = await useAsyncQuery<HomePageType>(query, variables);
    const variables = {
      documentId: options.productId,
      locale: options.locale,
    };
    return useAsyncQuery<ProductGetType>(query, variables)
      .then((data) => {
        return data.data.value?.product;
      })
      .catch((error) => {
        throw error;
      });
  }
}
