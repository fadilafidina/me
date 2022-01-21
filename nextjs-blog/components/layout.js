import Head from 'next/head'
import Navbar from './navbar'

export const siteTitle = 'howdy 🤠'

export default function Layout({ children, home }) {
  return (
    <div className='pt-12'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="me struggling to build something haha okay"
        />
      </Head>
      <Navbar></Navbar>

      <div className="p-12 grid justify-center">
      <main>{children}</main>
      </div>
    </div>
  )
}