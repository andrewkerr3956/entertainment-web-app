import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@components/layout/Navbar'
import Router from 'next/router'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [authLayout, setAuthLayout] = useState(false);
  useEffect(() => {
    if (Router.asPath.includes('/auth')) {
      setAuthLayout(true);
    }
  }, []);
  return (
    <>
      <div className={`bg-dark-blue w-full ${!authLayout ? "grid grid-cols-main gap-9" : ""} px-2 text-white`}>
        {!authLayout ? (
          <aside role="toolbar">
            <Navbar />
          </aside>
        ) : null}
        <main className="pt-16 pb-13">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}
