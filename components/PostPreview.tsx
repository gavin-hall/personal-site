// import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className="mx-auto mb-24 max-w-[64rem] px-8">
      <div className="mb-4">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-2 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="font-heading hover:underline">
          {title}
        </Link>
      </h3>
      <div className="">
        <Date dateString={date} />
      </div>
    </div>
  )
}
