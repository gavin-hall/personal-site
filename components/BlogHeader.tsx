import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="w-full relative top-0 left-0 right-0 h-24 flex justify-center items-center">
          <h1 className="text-2xl">{title}</h1>
        </header>
      )

    case 2:
      return (
        <header className="w-full relative top-0 left-0 right-0 h-24 flex justify-center items-center">
          <h1 className="text-2xl">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h1>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
