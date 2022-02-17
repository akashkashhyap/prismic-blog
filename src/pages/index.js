import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import  Blog  from "../components/blog"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Blog></Blog>
   
  </Layout>
)

export default IndexPage
