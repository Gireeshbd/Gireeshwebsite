import { graphql, useStaticQuery } from "gatsby";

// type ContentfulImage = {
//   assets: {
//     edges: {
//       node: {
//         contentful_id: string
//         fluid: FluidObject
//       }
//     }[]
//   }
// }
export const useContentfulImage = (assetUrl) => {
  const { assets } = useStaticQuery(
    graphql`
      query CONTENTFUL_IMAGE_QUERY {
        assets: allContentfulAsset {
          edges {
            node {
              contentful_id
              gatsbyImageData(width: 1050, quality: 100)
            }
          }
        }
      }
    `
  );
  const asset = assets.edges.find(
    ({ node }) => node.contentful_id === assetUrl
  );
  return asset;
};
