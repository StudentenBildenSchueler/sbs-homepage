import React from 'react'
import { Article, Title, TitleLink, Meta } from './styles'
import { DateIcon, TimeIcon } from '../Icons'

const PostExcerpt = ({ post }) => (
  <Article>
    <Title>
      <TitleLink to={'/blog/' + post.slug}>
        {post.title.title}
      </TitleLink>
    </Title>
    <Meta>
      <DateIcon /> {post.date} | <TimeIcon /> {post.body.data.timeToRead} Min Lesezeit
    </Meta>
    <p dangerouslySetInnerHTML={{ __html: post.body.data.excerpt }} />
  </Article>
)

export default PostExcerpt
