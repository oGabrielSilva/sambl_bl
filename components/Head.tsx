import HeadNext from 'next/head'
import React from 'react'
import Constants, { strings } from '../utils/Constants'

type THead = {
  title?: string
  description?: string
  keywords?: string
  author?: string
}

const Head = ({ title, description, keywords, author }: THead) => {
  return (
    <HeadNext>
      <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      <meta name="keywords" content={keywords || strings.keywords}></meta>
      <meta name="description" content={description || strings.description} />
      <meta name="author" content={author || strings.author}></meta>
      <title>{title || Constants.appName}</title>
    </HeadNext>
  )
}

export default Head
