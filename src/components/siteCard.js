import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import Tags from './tags'

const SiteCard = ({ node, filters, update }) => {
  // Collect tags
  var tags = []
  if (node.frontmatter.tech) {
    tags = tags.concat(node.frontmatter.tech)
  }
  if (node.frontmatter.frameworks) {
    tags = tags.concat(node.frontmatter.frameworks)
  }
  if (node.frontmatter.backends) {
    tags = tags.concat(node.frontmatter.backends)
  }

  if (filters.length === 0 || filters.some(f => tags.includes(f))) {
    return (
      <div className="site-container" key={node.fields.slug}>
        <div className="site">
          <Link to={`sites${node.fields.slug}`}>
            <div className="thumbnail">
              <Img fluid={node.frontmatter.coverImage.childImageSharp.fluid} />
              <div className="overlay">
                <div className="view-button">View Details</div>
              </div>
            </div>
            <span className="title">
              {node.frontmatter.title || node.fields.slug}
            </span>
          </Link>
          <Tags className="tags" values={tags} update={update} />
        </div>
      </div>
    )
  }
  return null
}

export default SiteCard
