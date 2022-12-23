// @ts-nocheck

import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components/'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

const posts = [
  { title: 'React Testing', excerpt: 'I am testing' },
  { title: 'Flamengo Ganhou', excerpt: 'I am testing flamengo' },
  { title: 'Brazil 2026', excerpt: 'We will be back' },
]

function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Fellipe Brito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts></FeaturedPosts>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}