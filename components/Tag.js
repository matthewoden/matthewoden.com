import Link from 'next/link'
import { kebabCase } from '@/lib/utils'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-xs font-medium text-blue-500 lowercase hover:text-blue-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
