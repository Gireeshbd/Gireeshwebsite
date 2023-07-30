import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const BlogHome = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPostMain {
        nodes {
          blogBody {
            raw
          }

          date(formatString: "MMMM DD YYYY")
          title
          slug
        }
      }
    }
  `);
  return (
    <div className="bloghome_wrapper">
      <ul>
        {data.allContentfulBlogPostMain.nodes.map((node) => (
          <li key={node.slug}>
            <h1>
              <Link to={`/blog/${node.slug}`}>{node.title}</Link>
            </h1>
            <h3>Published : {node.date}</h3>
            {node.body?.raw && <div>{renderRichText(node.blogBody)}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogHome;
