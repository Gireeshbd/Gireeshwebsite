import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "../CSS/blogHome.css";
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
      <h2 id="blogHome">Read my latest article</h2>
      <ul>
        {data.allContentfulBlogPostMain.nodes.map((node) => (
          <li key={node.slug}>
            <p>
              <Link to={`/blog/${node.slug}`} className="link">
                {node.title}
              </Link>
            </p>

            {/* {node.blogBody?.raw && (
              <div>{renderRichText(node.blogBody)}</div>
            )} */}
          </li>
        ))}
      </ul>
      <span className="viewAll">
        <Link to={`/blog/`} className="linkViewAll">
          View All
        </Link>
      </span>
    </div>
  );
};

export default BlogHome;
