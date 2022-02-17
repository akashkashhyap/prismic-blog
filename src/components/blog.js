import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicBlogs(sort: { fields: id, order: DESC }) {
        nodes {
          uid
          date: first_publication_date(formatString: "YYYY-MM-DD")
          data {
            author {
              text
            }

            image {
              gatsbyImageData
            }

            title {
              text
            }
          }
        }
      }
    }
  `)

  return (
    <div className="blogList">
      {data.allPrismicBlogs.nodes.map((blog, index) => {
        //  const image = getImage(blog.data.image.gatsbyImageData);

        return (
          <article className="blogCard" key={index}>
            <img
              src={blog.data.image.gatsbyImageData.images.fallback.src}
              alt=""
            />
            <h2 className="blogTitle">{blog.data.title.text}</h2>
            <p className="blogAuthor">{blog.data.author.text}</p>
            <p><span className="blogDate">{blog.date}</span></p>
            <Link to={`blogs/${blog.uid}`}>Read More</Link>
          </article>
        )
      })}
    </div>
  )
}

export default Blog
