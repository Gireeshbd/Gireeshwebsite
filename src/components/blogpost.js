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

import "../CSS/blogCSS.css";

export const query = graphql`
  query ($slug: String) {
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
      title
      date(formatString: "DD-MM-YYYY")
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
      <div className="blogBody">
        <div className="right">
          <h1 className="titleHead">{post.title}</h1>
          <div className="titleBelow">
            <p>
              <span>written by</span>{" "}
              <span className="nameWritten">Gireesh</span>
            </p>
            {/* <p>{post.date}</p> */}
          </div>
          <hr />
          <article className="blogContent">{renderRichText(blogBody)}</article>
        </div>
        <div className="left">
          <h2>About the Author</h2>
          <p>
            <span className="name-bold">Gireesh Reddy</span> writes about the
            improving life, building Charater, building discipline, I do small
            business for a where quality is evoparating slowley
          </p>
        </div>
      </div>
    </Layout>
  );
};
export const Head = ({ data }) => (
  <title>{data.contentfulBlogPostMain.title}</title>
);
export default Blogsingle;
