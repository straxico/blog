import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 5, skip: 10) {
        edges {
          node {
            id
            frontmatter {
              author
              status
              title
              date
              category
            }
            timeToRead
            wordCount {
              words
            }
            excerpt
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName