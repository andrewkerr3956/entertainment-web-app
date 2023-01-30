import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <body className="overflow-x-hidden w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
