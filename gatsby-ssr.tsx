import './src/styles/global.css'
import Layout from './src/components/Layout'
import React from 'react'

export const wrapPageElement: React.FC<{
  element: React.ReactNode
  props: {
    pageContext: {
      layout?: 'blog'
    }
  }
}> = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}
