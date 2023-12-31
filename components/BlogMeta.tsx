/**
 * All the shared stuff that goes into <head> on `(blog)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */

export default function BlogMeta() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/favicon/apple-touch-icon.png"
      />
      <link rel="icon" type="image/png" href="/favicon/favicon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
    </>
  )
}
