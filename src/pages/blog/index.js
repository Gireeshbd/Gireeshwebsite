import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.allContentfulBlogPostMain.nodes.map((node) => (
          <li key={node.title}>
            <h1>
              <Link to={`${node.slug}`}>{node.slug}</Link>
            </h1>
            <div>{node.publishedDate}</div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPostMain {
      nodes {
        title

        date(formatString: "MMMM DD YYYY")
        slug
      }
    }
  }
`;

export default BlogPost;
export const Head = () => <Seo title="Blog" />;
