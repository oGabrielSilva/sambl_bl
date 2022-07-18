import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Dashboard.module.css'
import { mockImages, mockPosts } from '../../db/mock'
import Button from './Button'
import { strings } from '../../utils/Constants'
import { IoImageOutline, IoMenuOutline } from 'react-icons/io5'
import { SamblContext } from '../../context/Sambl'

type mediumMasterContainerType =
  | 'longMasterContainer'
  | 'mediumMasterContainer'
  | 'smallMasterContainer'
  | 'mobileMasterContainer'

const Article = () => {
  const { screenSize, openNav, setOpenNav } = useContext(SamblContext)
  const [posts, setPosts] = useState(mockPosts)
  const [images, setImages] = useState(mockImages)
  const [media, setMedia] = useState<mediumMasterContainerType>()

  useEffect(() => {
    if (screenSize >= 1300) setMedia('longMasterContainer')
    else if (screenSize >= 1078) setMedia('mediumMasterContainer')
    else if (screenSize >= 850) setMedia('smallMasterContainer')
    else setMedia('mobileMasterContainer')
  }, [screenSize])

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {screenSize <= 620 && (
          <div style={{ marginRight: 10 }}>
            <Button onClick={() => setOpenNav((v) => !v)}>
              <IoMenuOutline size={24} />
            </Button>
          </div>
        )}
        <Button>
          <span style={{ marginRight: 10 }}>&#10010;</span>
          Novo
        </Button>
      </div>
      <div
        className={
          (media === 'longMasterContainer' && styles.longMasterContainer) ||
          (media === 'mediumMasterContainer' && styles.mediumMasterContainer) ||
          (media === 'smallMasterContainer' && styles.smallMasterContainer) ||
          styles.mobileMasterContainer
        }
      >
        {posts.map((post, index) => {
          return (
            <div
              key={post.id}
              className={styles.container}
              style={{ marginRight: (openNav && 10) || 0 }}
            >
              <p className={styles.title}>{post.title}</p>
              <div className={styles.module}>
                <div className={styles.moduleInfo}>
                  <p className={styles.fragment}>
                    {strings.admin.article.authorName}: {post.author}
                  </p>
                  <p className={styles.fragment}>{post.category}</p>
                  <p className={styles.fragment}>{post.views}</p>
                </div>
              </div>
              <Link href={images[index].url}>
                <a target="_blanl">
                  <IoImageOutline size={24} />
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Article
