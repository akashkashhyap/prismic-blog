import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"

export const query = graphql`
  query GetBlog($slug: String!) {
    prismicBlogs(uid: { eq: $slug }) {
      data {
        article {
          text
          raw
        }

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
`
const BlogTemplate = ({ data }) => {
  console.log(data.prismicBlogs.data.image.gatsbyImageData.images.fallback.src)
  return (
    <Layout>
      <article className="singleBlog">
        <h1 className="singleBlog-title">
          {data.prismicBlogs.data.title.text}
        </h1>

        <span>By: {data.prismicBlogs.data.author.text}</span>
        
        <img
              src={data.prismicBlogs.data.image.gatsbyImageData.images.fallback.src}
              alt=""
            />
        {/* <Image
          fluid={data.prismicBlogs.data.image.localFile.childImageSharp.fluid}
        /> */}
        <RichText render={data.prismicBlogs.data.article.raw}/>
        
      </article>
    </Layout>
  )
}

export default BlogTemplate
