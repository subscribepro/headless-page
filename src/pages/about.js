import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
  p {
    line-height: 2;
    margin: 1rem 0 2rem;
    letter-spacing: 0.4px;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `headless`,
        `e-commerce`,
        `ecommerce`,
        `Pilon`,
        `API-first`,
        `micro-services`,
        `Gatsby`,
        `Magento`,
        `Shopify`,
      ]}
    />
    <Wrapper>
      <h1>About Headless.page</h1>
      <p>
        Headless.page is a curated list of modern e-commerce sites. We have
        searched high and low to find the e-commerce sites who are doing things
        correctly with regard to modern tech and architecture paterns like: PWA
        (Progress Web Applications), Headless, API-First Back-end. Where we can,
        we call out which JavaScript framework(s) a site was built with (React,
        Vue, Gatsby, etc) and which e-commerce back-ends a site is powered by
        (Magento, Shopify, Stripe, Hybris, etc).
      </p>
      <p>
        This site was created by Pilon. Pilon enabled developers to spin up
        modern e-commerce experiences 10x faster than traditional front-end
        templating systems.
      </p>
      <p>
        If you have suggestions for sites we should add or new information,
        don't hesitate to get in touch. Email us at{' '}
        <a href="mailto:info@pilon.io">info@pilon.io</a>.
      </p>
    </Wrapper>
  </Layout>
)

export default AboutPage
