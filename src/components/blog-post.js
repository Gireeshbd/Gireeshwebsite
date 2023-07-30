import React from "react";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  renderRichText,
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text";
import Layout from "./layout";
import Seo from "./seo";
import Img from "gatsby-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Options } from "@contentful/rich-text-react-renderer";
import { useContentfulImage } from "../hooks/useContentfullimage";
import { Bold, Heading1, Text } from "../hooks/Markdown";
export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPostMain(slug: { eq: $slug }) {
      blogBody {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            gatsbyImage(width: 1000)
            file {
              url
            }
          }
        }
      }
      blogThumbnail {
        file {
          url
        }
      }
    }
  }
`;

const Blogsingle = ({ data }) => {
  const post = data.contentfulBlogPostMain;

  const { blogBody } = post;

  // const asset = useContentfulImage(post.sys.contentType.sys.id);
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (children) => <Heading1>{children}</Heading1>,
      [BLOCKS.PARAGRAPH]: (children) => <Text>{children}</Text>,
      // [BLOCKS.EMBEDDED_ASSET]: (node) => {
      //   console.log(node);
      //   const { file } = data.target;
      //   return <img src={file.url} alt="embedded asset" />;
      // },
    },
  };

  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>

        <p>{post.date}</p>

        <article className="blog-body">
          {renderRichText(blogBody.raw, options)}
        </article>
      </div>
    </Layout>
  );
};
export const Head = ({ data }) => (
  <title>{data.contentfulBlogPostMain.title}</title>
);
export default Blogsingle;
