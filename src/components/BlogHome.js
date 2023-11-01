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
          blogThumbnail {
            url
          }
          blogSeoDescription

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
      <ul className="blogcards">
        {data.allContentfulBlogPostMain.nodes.map((node) => (
          <li key={node.slug}>
            <div className="blog-card">
              <img
                src={node.blogThumbnail?.url ?? null}
                alt="thumbnail"
                width={250}
                height={140}
                className="thumbnailImg"
              />
              <h3>
                <Link to={`/blog/${node.slug}`} className="link">
                  {node.title}
                </Link>
              </h3>
              <p className="seoDes">
                {node.blogSeoDescription ? node.blogSeoDescription : null}
              </p>
            </div>
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
