import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@components/layout/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-dark-blue w-full grid grid-cols-main gap-9 px-2 text-white">
        <aside role="toolbar">
          <Navbar />
        </aside>
        <main className="pt-16 pb-13">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}
