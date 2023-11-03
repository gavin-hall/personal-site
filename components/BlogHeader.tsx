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
        <header className="flex flex-col items-center justify-center gap-4 px-8 py-8">
          <Link href="/">
            <img
              src="/Gavin.jpg"
              alt="Gavin Hall, Designer"
              className="h-24 w-24 rounded-full  shadow"
            />
          </Link>
          {/* <h1 className="font-semibold">{title}</h1> */}
        </header>
      )

    case 2:
      return (
        <header className="flex flex-col items-center justify-center gap-4 px-8 py-8">
          <Link href="/">
            <img
              src="/Gavin.jpg"
              alt="Gavin Hall, Designer"
              className="h-24 w-24 rounded-full  shadow"
            />
          </Link>
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
