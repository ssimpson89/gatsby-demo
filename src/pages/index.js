// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page!">
      <p>This is a Gatsby Tutorial</p>
      <StaticImage
        alt="This is a duck"
        src="../images/mallard_duck.jpg"
      />
    </Layout>
  )
}
// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>
export const Head = () => <Seo title="Home" />

// Step 3: Export your component
export default IndexPage