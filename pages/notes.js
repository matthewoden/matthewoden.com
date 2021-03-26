import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('notes')

  return { props: { posts } }
}

export default function Blog({ posts }) {
  return (
    <>
      <PageSeo
        title={`Notes - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/notes`}
      />
      <ListLayout posts={posts} title="All Notes" />
    </>
  )
}
