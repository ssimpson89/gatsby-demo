// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there, this is my about me page</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo title="About Me!" />
    <meta name="description" content="Your description" />
  </>
)

// Step 3: Export your component
export default AboutPage