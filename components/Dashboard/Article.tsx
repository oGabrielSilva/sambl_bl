import React, { useState } from 'react'
import { mockPosts } from '../../db/mock'
import Button from './Button'

const Article = () => {
  const [posts, setPosts] = useState(mockPosts)

  return (
    <div>
      <div>
        <Button>
          <span style={{ marginRight: 10 }}>&#10010;</span>
        </Button>
      </div>
      <div>
        {posts.map((post) => {
          return <p key={post.id}>{post.title}</p>
        })}
      </div>
    </div>
  )
}

export default Article
